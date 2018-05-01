import {h, Component} from "preact"
import cn from "classnames"

import Close from "icons/close"

import styles from "./style"

class ImageOverlay extends Component {
	handleKeyDown = (e) => {
		if (e.keyCode === 27) this.props.handleOverlay()
	}

	closeOverlay = () => {
		this.props.handleOverlay()
	}

	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown)
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown)
	}

	render({image}) {
		return (
			<div
				tabIndex="0"
				onKeyDown={this.handleKeyDown}
				class={styles.overlay}
				>
				<img
					class={styles.image}
					src={image}
					/>
				<Close
					class={styles.close}
					onClick={this.closeOverlay}
					/>
			</div>
		)
	}	
}

export default ImageOverlay
