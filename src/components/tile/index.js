import {
	useState,
	useEffect,
} from "preact/hooks"

import moment from "moment"

import Loader from "components/loader"

import cn from "classnames"
import style from "./style"

const Tile = ({project, overrideClass}) => {
	let img = new Image()
	const [loaded, toggleLoaded] = useState(false)
	useEffect(() => {
		toggleLoaded(false)
		img.src = `${API}${project.thumbnail}`
		img.onload = () => toggleLoaded(true)

		return () => {
			img.src = null
		}		
	}, [project.thumbnail, img.onload, img.src])

	return (
		<a
			class={cn(style.tile, overrideClass)}
			href={project.href}
			>
			{loaded ? (
				<div
					class={style.thumb}
					style={{
						backgroundImage: `url(${API}${project.thumbnail})`
					}}
					/>
			) : (
				<Loader />
			)}
			<div class={style.header}>
				<h2 class={style.title}>
					{project.title}
				</h2>
				<p class={style.date}>
					{moment.unix(project.date).fromNow()}
				</p>
			</div>
		</a>
	)
}

export default Tile