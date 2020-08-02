import {h, Component} from "preact"

import cn from "classnames"
import style from "./style"

export default class Mun extends Component {
  state = {
    visible: false,
  }
  textureLoader = new THREE.TextureLoader()
  mun = undefined

  initScene = () => {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    this.renderer.setSize(400, 400)

    const light1 = new THREE.PointLight(0xffffff, 1.5)
    light1.position.set(-800, 0, -150)
    this.scene.add(light1)    

    const light2 = new THREE.PointLight(0xffffff, 1)
    light2.position.set(300, 0, -350)
    this.scene.add(light2)

    const container = document.querySelector("#mun")
    container.appendChild(this.renderer.domElement)
  }

  makeMun = () => {
    this.mun = new THREE.Mesh(
      new THREE.SphereGeometry(
        200, 32, 64,
        0, Math.PI * 2,
        0, Math.PI * 2
      ),
      new THREE.MeshPhysicalMaterial({
        color: 0xfffdfa,
        roughness: 1,
        metalness: 0.4,
        normalMap: this.textureLoader.load(
          "assets/images/mun_n.png",
          this.setState({visible: true}),
        ),
      })
    )

    this.mun.position.set(0, 0, -400)
    this.scene.add(this.mun)
  }

  update = () => {
    requestAnimationFrame(this.update)

    this.mun.rotation.y -= 0.001

    this.renderer.render(this.scene, this.camera)
  }

  componentDidMount() {
    this.initScene()
    this.makeMun()

    this.update()
  }

  render({}, {visible}) {
    return (
      <div
        id="mun"
        class={cn(style.mun, {
          [style.visible]: visible,
        })}
        />
    )
  }
}
