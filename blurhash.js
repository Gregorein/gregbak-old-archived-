const path = require("path")
const fs = require("fs")
const PNG = require("pngjs").PNG
const {
	createCanvas,
	loadImage
} = require("canvas")
const {
	encode,
	isBlurhashValid,
} = require("blurhash")

const findFiles = (filepath, filter, callback) => {
	if (!fs.existsSync(filepath)) {
		console.error("ERROR: no dir", filepath)
		return
	}

	const files = fs.readdirSync(filepath)
	files.forEach(f => {
		const filename = path.join(filepath, f)
		const stat = fs.lstatSync(filename)

		if (stat.isDirectory()) {
			findFiles(filename, filter, callback)
		}
		else if (filter.test(filename)) callback(filename)
	})
}

const getImageData = async filepath => {
	const file = fs.readFileSync(filepath)
	const png = new PNG.sync.read(file)

	const image = await loadImage(filepath)
	const {height, width} = png

	const canvas = createCanvas(width, height)
	const context = canvas.getContext("2d")
	context.drawImage(image, 0, 0)
	return context.getImageData(0, 0, width, height)
}

const blurhash = ({data, width, height}) => encode(data, width, height, 4, 4) 

let searchpath
if(!process.argv[2]) {
	console.error("no searchpath found, exiting")
	return
} else searchpath = process.argv[2]

let filter 
if(!process.argv[3]) {
	console.error("no filter found, defaulting to /\.png/")
	filter = /\.png$/
} else filter = process.argv[3]

findFiles(searchpath, filter, async f => {
 	const data = await getImageData(f)
	const blur = blurhash(data)

	console.log(f, isBlurhashValid(blur).result ? blur : "ERROR!")
})