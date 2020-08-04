import {
	useState,
	useEffect,
} from "preact/hooks"

import Loader from "components/loader"
import Fullscreen from "icons/fullscreen"

import cn from "classnames"
import style from "./style"

const ImageTile = ({height, width, url, single, handleClick}) => {
	const [updates, setUpdates] = useState(0)
	const [loaded, toggleLoaded] = useState(false)
	let resizeTimer
	let img = new Image()

	useEffect(() => {
		loadImage(`${API}${url}`)
	}, [])

	useEffect(() => {
		const resizeTimer = setTimeout(() => setUpdates(updates+1), 25)

		return () => clearTimeout(resizeTimer)
	}, [window.innerHeight, window.innerWidth])

	const loadImage = src => {
		img.src = src
		img.onload = () => toggleLoaded(true)
	}

	const isSingle = single && window.innerWidth > 768

	return (
		<div
			class={cn(style.imageWrap, {
				[style.single]: isSingle,
			})}
			style={{          
				maxWidth: isSingle ? `${(window.innerHeight/height) * width}px` : `${width}px`,
			}}
			>
			{loaded ? (
				<div
					class={style.image}
					onClick={handleClick}
					style={{
						paddingBottom: `${100 * height/width}%`,
						backgroundImage: `url(${API}${url})`,
					}}
					>
					<Fullscreen class={style.fullscreen} />
				</div>
			) : (
				<div style={{paddingBottom: `${100 * height/width}%`}}>
					<Loader />
				</div>
			)}
		</div>
	)
}

export default ImageTile