import {h} from "preact"

import Radiv from "components/radiv"

import styles from "./style"

const View = ({children, ...props}) => (
	<Radiv
		class={styles.view}
		urls={{
			"/portfolio": styles.aFilters,
			"/portfolio/*": styles.aReturn
		}}
		{...props}
	>
		{children}
	</Radiv>
)

export default View
