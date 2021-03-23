import {h} from "preact"
import {
	useState,
	useEffect,
} from "preact/hooks"
import {Blurhash} from "react-blurhash"

import cn from "classnames"
import style from "./style"

const VideoTile = ({width, height, url, blurhash}) => {
	const vid = document.createElement("video")
	const [loaded, toggleLoaded] = useState(false)
	const [visible, toggleVisible] = useState(true)
	useEffect(() => {
		toggleLoaded(false)
		vid.src = `${API}${url}`
		vid.oncanplay = () => {
			console.log("!!!!")
			toggleLoaded(true)

			setTimeout(() => {
				toggleVisible(false)
		}, 1000)
		}

		return () => {
			vid.src = ""
		}
	}, [])



	return (
		<div
			class={style.videoWrap}
			style={{
				height: `${height}px`,
				width: `${width}px`,
			}}
			>
			{blurhash && <Blurhash
				hash={blurhash}
				width="100%"
				height="100%"
				/>
			}
			{loaded && <video
				class={cn(style.video, {
					[style.hidden]: visible,
				})}
				height={height}
				width={width}
				src={`${API}${url}`}
				controls
				/>
			}
		</div>
	)
}

export default VideoTile
