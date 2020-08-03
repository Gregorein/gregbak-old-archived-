import {useEffect} from "preact/hooks"

import Close from "icons/close"

import cn from "classnames"
import style from "./style"

const ImageOverlay = ({handleOverlay, image}) => {
	const handleKeyDown = e => {
		if (e.keyCode === 27) handleOverlay()
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	return (
		<div
			tabIndex="0"
			onKeyDown={handleKeyDown}
			class={style.overlay}
			>
			<img
				class={style.image}
				src={image}
				/>
			<Close
				class={style.close}
				onClick={handleOverlay}
				/>
		</div>
	)
} 

export default ImageOverlay