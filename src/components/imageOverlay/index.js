import {
	useState,
	useEffect,
} from "preact/hooks"

import Close from "icons/close"

import Loader from "components/loader"

import cn from "classnames"
import style from "./style"

const ImageOverlay = ({handleOverlay, image}) => {
	let img = new Image()
	const [loaded, toggleLoaded] = useState(false)
	useEffect(() => {
		toggleLoaded(false)
		img.src = image
		img.onload = () => toggleLoaded(true)

		return () => {
			img.src = null
		}		
	}, [image, img.onload, img.src])

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
			{loaded ? (
				<img
					class={style.image}
					src={image}
					/>
			) : (
				<Loader />
			)}
			<Close
				class={style.close}
				onClick={handleOverlay}
				/>
		</div>
	)
} 

export default ImageOverlay