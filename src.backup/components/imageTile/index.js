import {h, Component} from "preact"
import config from "config"
import cn from "classnames"

import Loader from "components/loader"
import Fullscreen from "icons/fullscreen"

import styles from "./style"

class ImageLink extends Component {
	constructor() {
		super()

		this.state = {
			updates: 0,
			loaded: false
		}

		this.resizeTimer
		this.img = new Image()
	}

	updateDimensions = () => {
		let {updates} = this.state

		clearTimeout(this.resizeTimer);
	  this.resizeTimer = setTimeout(() => {

			this.setState({
				// ...this.state,
				updates: updates++
			})
		}, 25)
	}

	loadImage = url => {
		this.img.src = url
		this.img.onload = () => {
			this.setState({
				loaded: true
			})
		}
	}

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener("resize", this.updateDimensions)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
	}

	render ({height, width, url, single, first, handleClick}, {loaded}) {
		if(!loaded) this.loadImage(`${config.api}${url}`)
		return (
			<div
				class={cn(styles.imageWrap, {
					[styles.single]: single,
					[styles.first]: first,
				})}
				style={{
					maxWidth: !single ? `${width}px` : `${(window.innerHeight/height) * width}px`,
				}}
				>
				{loaded ? (
					<div
						class={styles.image}
						onClick={() => handleClick()}
						style={{
							paddingBottom: `${100*height/width}%`,
							backgroundImage: `url(${config.api}${url})`,
						}}
						>
						<Fullscreen class={styles.fullscreen} />
					</div>
					) : (
						<Loader />
					)}
			</div>
		)
	}
}

export default ImageLink
