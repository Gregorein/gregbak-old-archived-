import {h, Component} from "preact"

import View from "components/view"

import styles from "./style"

export default class Home extends Component {
	render() {
		return (
			<View class={styles.view}>
				<h1 class={styles.cta}>
					<span class={styles.word1}>i am</span>
					<span class={styles.word2}>Greg</span>
					<span class={styles.word3}>a creative software engineer and an artist from the other</span>
					<span class={styles.word4}>world.</span>
				</h1>
			</View>
		)
	}
}
