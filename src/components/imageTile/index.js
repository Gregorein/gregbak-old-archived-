import {h, Component} from "preact"
import config from "config"
import cn from "classnames"

import Fullscreen from "icons/fullscreen"

import styles from "./style"

class ImageLink extends Component {
	constructor(props) {
		super(props)

		this.state = {
			updates: 0
		}

		this.resizeTimer
	}

	updateDimensions = () => {
		let {updates} = this.state

		clearTimeout(this.resizeTimer);
	  this.resizeTimer = setTimeout(() => {

			this.setState({
				...this.state,
				updates: updates++
			})
		}, 25)
	}

	componentDidMount() {
		this.updateDimensions()
		 window.addEventListener("resize", this.updateDimensions)
	}
	componentWillUnmount() {
		 window.removeEventListener("resize", this.updateDimensions)
	}

	render ({height, width, url, single, first, handleClick}) {
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
			</div>
		)
	}
}

export default ImageLink
