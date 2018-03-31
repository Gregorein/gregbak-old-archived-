import {h, Component} from "preact"

import cn from "classnames"

import Logo from "components/logo"
import Radiv from "components/radiv"

import styles from "./style"

export default class Sidebar extends Component {
	render({step}) {
		return (
			<Radiv
				class={styles.sidebar}
				urls={{
					"/": cn({
						// splash
						[styles.tHeavy]: !step || step === 0,
						[styles.hGold]: !step || step === 0,
						// story
						[styles.tSalmon]: step === 1,
						[styles.hMedium]: step === 1
					}),
					"/portfolio": cn(styles.showFilters, styles.tHeavy, styles.hSalmon),
					"/portfolio/*": cn(styles.showReturn),
					"/contact": cn(styles.tHeavy, styles.hGold),
					"/about": cn(styles.tHeavy, styles.hSalmon), 
					"/policy-copyrights": cn(styles.tHeavy, styles.hMedium)
				}}
			>
				<nav>
					<a href="/" title="home"><Logo class={styles.logo} /></a>
					<a href="/portfolio" title="portfolio">portfolio</a>
					<a href="/contact" title="contact">contact</a>
					<a href="/about" title="about">about</a>
				</nav>
			</Radiv>
		)
	}
}
