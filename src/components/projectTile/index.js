import {h} from "preact"

import Img from "components/img"

import cn from "classnames"
import style from "./style"

const ProjectTile = ({project, overrideClass}) => (
	<a
		class={cn(style.tile, overrideClass)}
		href={project.href}
		>
		<div class={style.thumb}>
			<Img
				extraClass={style.img}
				url={`${API}${project.thumbnail}`}
				alt={project.title}
				height={project.height}
				width={project.width}
				blurhash={project.blurhash}
				/>
		</div>
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

export default ProjectTile