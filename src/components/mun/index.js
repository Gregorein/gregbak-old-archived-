import {
	useState,
	useEffect,
	useRef,
} from "preact/hooks"

import cn from "classnames"
import style from "./style"

const Mun = () => {
	const [visible, toggleVisibility] = useState(false)
	const	textureLoader = new THREE.TextureLoader()
	const container = useRef(null)
	let mun, scene, camera, renderer

	useEffect(() => {
		initScene()
		makeMun()

		update()
	}, [])

	const initScene = () => {
		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)

		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
		renderer.setSize(400, 400)

		const light1 = new THREE.PointLight(0xffffff, 1.5)
		light1.position.set(-800, 0, -150)
		scene.add(light1)    

		const light2 = new THREE.PointLight(0xffffff, 1)
		light2.position.set(300, 0, -350)
		scene.add(light2)

		container.current.appendChild(renderer.domElement)
	}

	const makeMun = () => {
		mun = new THREE.Mesh(
			new THREE.SphereGeometry(
				200, 32, 64,
				0, Math.PI * 2,
				0, Math.PI * 2
			),
			new THREE.MeshPhysicalMaterial({
				color: 0xfffdfa,
				roughness: 1,
				metalness: 0.4,
				normalMap: textureLoader.load(
					"assets/images/mun_n.png",
					toggleVisibility(true),
				),
			})
		)

		mun.position.set(0, 0, -400)
		scene.add(mun)
	}

	const update = () => {
		requestAnimationFrame(update)

		mun.rotation.y -= 0.001

		renderer.render(scene, camera)
	}

	return (
		<div
			ref={container}
			class={cn(style.mun, {
				[style.visible]: visible,
			})}
			/>
	)
}

export default Mun