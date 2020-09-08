import {h} from "preact"
import {
	useState,
	useEffect,
	useRef,
} from "preact/hooks"

import cn from "classnames"
import style from "./style"

const	textureLoader = new THREE.TextureLoader()
const Mun = ({altStyle=false}) => {
	const [normalLoaded, toggleNormalLoaded] = useState(false)
	const [bumpLoaded, toggleBumpLoaded] = useState(false)

	const container = useRef(null)
	const normal = useRef(null)
	const bump = useRef(null)
	let mun, scene, camera, renderer
	useEffect(() => {
		normal.current = textureLoader.load("assets/images/mun_n.png", toggleNormalLoaded(true))
		bump.current = textureLoader.load("assets/images/mun_d.png", toggleBumpLoaded(true))
		
		initScene()
		makeMun()

		update()
	}, [])

	const initScene = () => {
		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(60, 1, 1, 4000)
		camera.position.set(0, 0, 430)

		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap
		renderer.toneMapping = THREE.ACESFilmicToneMapping

		renderer.setSize(400, 400)

		const key = new THREE.SpotLight(0xffffff, 8, 800, Math.PI/6, 0.2)
		key.position.set(-300, 0, 400)
		key.castShadow = true
		scene.add(key)

		const rim = new THREE.SpotLight(0xffffff, 8, 500, Math.PI/6, 0.1)
		rim.position.set(400, 0, -200)
		rim.castShadow = true
		scene.add(rim)

		container.current.appendChild(renderer.domElement)
	}

	const makeMun = () => {
		mun = new THREE.Mesh(
			new THREE.IcosahedronGeometry(200, 4),
			new THREE.MeshStandardMaterial({
				color: 0xfffdfa,
				roughness: 0.75,
				metalness: 0.1,

				displacementMap: bump.current,
				displacementScale: -40,
				displacementBias: 0,

				normalMap: normal.current,
			})
		)
		mun.castShadow = true
		mun.receiveShadow = true
		scene.add(mun)
	}

	const update = () => {
		requestAnimationFrame(update)

		mun.rotation.y -= 0.001
		mun.rotation.z -= 0.0005

		renderer.render(scene, camera)
	}

	return (
		<div
			ref={container}
			class={cn(style.mun, {
				[style.dark]: altStyle,
				[style.hidden]: !(bumpLoaded && normalLoaded),
			})}
			/>
	)
}

export default Mun