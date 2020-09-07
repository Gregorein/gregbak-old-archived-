import {
	useState,
	useEffect,
} from "preact/hooks"
import {Blurhash} from "react-blurhash"

import cn from "classnames"
import style from "./style"

const Img = ({url="", alt, blurhash, extraClass}) => {
	const img = new Image()
	const [loaded, toggleLoaded] = useState(false)
	const [visible, toggleVisible] = useState(true)
	useEffect(() => {
		toggleLoaded(false)
		img.src = url
		img.onload = () => {
			toggleLoaded(true)

			setTimeout(() => {
				toggleVisible(false)
			}, 1)
		}

		return () => {
			img.src = null
		}
	}, [])

	return (
		<div
			class={cn(style.container, extraClass)}
			>
			<Blurhash
				hash={blurhash}
				width="100%"
				height="100%"
				/>
			{loaded && <img
				class={cn(style.image, {
					[style.hidden]: visible,
				})}
				src={url}
				alt={alt}
				/>
			}
		</div>
	)
}

export default Img