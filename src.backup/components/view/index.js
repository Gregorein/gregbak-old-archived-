import {h} from "preact"

import cn from "classnames"

import Radiv from "components/radiv"

import styles from "./style"

const View = ({children, ...props}) => (
	<Radiv
		{...props}
		class={styles.container}
		urls={{
			"/": styles.full,
			"/portfolio": cn(styles.aFilters, styles.bHeavy),
			"/portfolio/*": cn(styles.aReturn, styles.bHeavy),
			"/policy-copyrights": styles.bSalmon,
		}}
	>
		<div class={cn(styles.view, ...props.class)}>
			{children}
		</div>
	</Radiv>
)

export default View
