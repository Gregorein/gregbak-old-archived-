import {h} from "preact"
import {
	useState,
	useEffect,
} from "preact/hooks"

import Img from "components/img"
import Fullscreen from "icons/fullscreen"

import cn from "classnames"
import style from "./style"

const ImageTile = ({url, title, height, width, blurhash, single, handleClick}) => {
	let resizeTimer

	const [updates, setUpdates] = useState(0)
	useEffect(() => {
		resizeTimer = setTimeout(() => setUpdates(updates+1), 25)

		return () => clearTimeout(resizeTimer)
	}, [window.innerHeight, window.innerWidth])

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
			<div
				class={style.container}
				onClick={handleClick}
				style={{paddingBottom: `${100 * height/width}%`}}
				>
				<Img
					extraClass={style.img}
					url={`${API}${url}`}
					alt={title}
					height={height}
					width={width}
					blurhash={blurhash}
					/>
				<Fullscreen class={style.fullscreen} />
			</div>
		</div>
	)
}

export default ImageTile