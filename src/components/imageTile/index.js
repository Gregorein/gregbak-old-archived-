import {
	useState,
	useEffect,
	useRef,
} from "preact/hooks"

import Loader from "components/loader"
import Fullscreen from "icons/Fullscreen"

import cn from "classnames"
import style from "./style"

const ImageTile = ({height, width, url, single, handleClick}) => {
	const [updates, setUpdates] = useState(0)
	const [loaded, toggleLoaded] = useState(false)
	const mounted = useRef()
	let resizeTimer
	let img = new Image()

	const updateDimensions = () => {
		clearTimeout(resizeTimer)
		resizeTimer = setTimeout(() => setUpdates(updates+1), 25)
	}

	const loadImage = src => {
		img.src = src
		img.onload = () => toggleLoaded(true)
	}

	useEffect(() => {
		if (!mounted.current) {
			window.addEventListener("resize", updateDimensions)
			loadImage(`${API}${url}`)
		} else {
			updateDimensions()      
		}

		return () => {
			window.removeEventListener("resize", updateDimensions)
		}
	})

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