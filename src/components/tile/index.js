import {h} from "preact"
import moment from "moment"
import cn from "classnames"

import config from "config"

import styles from "./style"

const Tile = ({project, small}) => (
	<a
		class={cn(styles.tile, {
				[styles.small]: small
			})}
		href={project.href}
		>
		<div
			class={styles.thumb}
			style={{
				backgroundImage: `url(${config.api}${project.thumbnail})`
			}}
			/>
		<div class={styles.header}>
			<h2 class={styles.title}>
				{project.title}
			</h2>
			<p class={styles.date}>
				{moment.unix(project.date).fromNow()}
			</p>
		</div>
	</a>
)

export default Tile
