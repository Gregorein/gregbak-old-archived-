import {h} from "preact"

import style from "./style"

const YoutubeTile = ({width, height, url}) => (
	<div
		class={style.videoWrap}
		style={{
			height: `${height}px`,
			width: `${width}px`,
		}}
		>
		<iframe
			id="ytplayer"
			type="text/html"
			width={`${width}px`}
			height={`${height}px`}
			src={`https://www.youtube.com/embed/${url}?color=white&iv_load_policy=3"`}
			frameborder="0"
			allowfullscreen
		/>
	</div>
)

export default YoutubeTile
