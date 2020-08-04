import {
	useState,
	useEffect,
	useRef,
} from "preact/hooks"

import cn from "classnames"
import style from "./style"

const Mun = () => {
	const	textureLoader = new THREE.TextureLoader()
	const normal = textureLoader.load("assets/images/mun_n_original.png")
	const bump = textureLoader.load("assets/images/mun_b_original.png")

	const container = useRef(null)
	let mun, scene, camera, renderer

	useEffect(() => {
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
		// renderer.shadowMap.enabled = true
		// renderer.shadowMap.type = THREE.PCFSoftShadowMap
		renderer.toneMapping = THREE.ACESFilmicToneMapping

		renderer.setSize(400, 400)

		const light1 = new THREE.SpotLight(0xffffff, 5, 800, Math.PI/4, 1)
		light1.position.set(-300, 0, 400)
		// light1.castShadow = true
		scene.add(light1)

		const light2 = new THREE.SpotLight(0xffffff, 5, 500, Math.PI/4, 1)
		light2.position.set(400, 0, -200)
		// light2.castShadow = true
		scene.add(light2)

		container.current.appendChild(renderer.domElement)
	}

	const makeMun = () => {
		mun = new THREE.Mesh(
			new THREE.SphereGeometry(200, 128, 64),
			new THREE.MeshStandardMaterial({
				color: 0xfffdfa,
				roughness: 0.9,
				metalness: 0.6,

				displacementMap: bump,
				displacementScale: 10,

				normalMap: normal,
				normalScale: new THREE.Vector2(0.5),
			})
		)
		// mun.castShadow = true
		// mun.receiveShadow = true
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
			class={cn(style.mun, style.visible)}
			/>
	)
}

export default Mun