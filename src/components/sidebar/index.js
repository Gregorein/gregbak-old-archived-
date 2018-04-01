import {h, Component} from "preact"
import {Link} from "preact-router/match"

import cn from "classnames"

import Logo from "components/logo"
import Radiv from "components/radiv"

import styles from "./style"

export default class Sidebar extends Component {
	state = {
		forceNav: false
	}

	handleShowNav = () => {
		this.setState({
			forceNav: true,
		})
	}
	handleHideNav = () => {
		this.setState({
			forceNav: false
		})
	}

	render({step = 0}, {forceNav}) {
		return (
			<Radiv
				class={styles.sidebar}
				urls={{
					"/": cn({
						[styles.tDark]: step === 0,
						[styles.hGold]: step === 0,
						[styles.tSalmon]: step === 1,
						[styles.hMedium]: step === 1
					}),
					"/portfolio": cn(styles.aFilters, styles.tDark, styles.hSalmon),
					"/portfolio/*": cn(styles.aReturn, styles.tDark, styles.hSalmon),
					"/contact": cn(styles.tDark, styles.hGold),
					"/about": cn(styles.tDark, styles.hSalmonAlt), 
					"/policy-copyrights": cn(styles.tDark, styles.hMedium)
				}}
			>
				<a
					class={cn(styles.logo, {
						[styles.large]: forceNav
					})}
					href="/"
					title="home"
					onMouseEnter={this.handleShowNav}
					onMouseLeave={this.handleHideNav}
				>
					<Logo />
				</a>
				<div
					class={cn(styles.navShow, {
						[styles.disabled]: forceNav
					})}
					onMouseEnter={this.handleShowNav}
					onMouseLeave={this.handleHideNav}
				>
					show menu
				</div>
				<nav
					class={cn(styles.nav, {
						[styles.active]: forceNav
					})}
					onMouseEnter={this.handleShowNav}
					onMouseLeave={this.handleHideNav}
				>
					<Link
						class={styles.link}
						activeClassName={styles.active}
						href="/portfolio"
						title="portfolio"
					>
						portfolio
					</Link>
					<Link
						class={styles.link}
						activeClassName={styles.active}
						href="/contact"
						title="contact"
					>
						contact
					</Link>
					<Link
						class={styles.link}
						activeClassName={styles.active}
						href="/about"
						title="about"
					>
						about
					</Link>
					<Link
						class={cn(styles.link, styles.footer)}
						href="/policy-copyrights"
						title="policy & copyrights"
					>
						policy & copyrights
					</Link>
				</nav>

				<nav class={styles.filters}>

				</nav>

				<a
					class={styles.return}
					href="/portfolio"
					title="return to projects"
				>
					return to projects
				</a>
			</Radiv>
		)
	}
}
