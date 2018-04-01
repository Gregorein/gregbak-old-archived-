import {h, Component} from "preact"

import View from "components/view"

import styles from "./style"

export default class Home extends Component {
	render() {
		return (
			<View class={styles.view}>
				<h1>HOME</h1>
				<a href="/portfolio/project">TEMP PROJECT</a>
			</View>
		)
	}
}
