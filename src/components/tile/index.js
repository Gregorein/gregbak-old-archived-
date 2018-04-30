import {h} from "preact"
import {Link} from "preact-router/match"
import moment from "moment"

import config from "config"

import styles from "./style"

const Tile = ({project}) => (
	<Link
		class={styles.tile}
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
	</Link>
)

export default Tile
