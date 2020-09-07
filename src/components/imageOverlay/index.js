import {useEffect} from "preact/hooks"

import Img from "components/img"
import Close from "icons/close"

import style from "./style"

const ImageOverlay = ({handleOverlay, image, width, height, blurhash}) => {
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
			<div style={{width, height}}>
				<Img
					url={image}
					alt={false}
					height={height}
					width={width}
					blurhash={blurhash}
					/>
			</div>

			<Close
				class={style.close}
				onClick={handleOverlay}
				/>
		</div>
	)
} 

export default ImageOverlay