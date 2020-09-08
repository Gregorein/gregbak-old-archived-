import {h} from "preact"
import {useState} from "preact/hooks"
import {Link} from "preact-router/match"

import Radiv from "components/radiv"
import Filters from "components/filters"

import Logo from "icons/logo"

import cn from "classnames"
import style from "./style"

const Sidebar = ({page=0, url="/"}) => {
	const [isMenuVisible, toggleMenuVisibility] = useState(false)
	const toggleMenu = (flag=undefined) => {
		toggleMenuVisibility(flag===undefined ? !isMenuVisible : flag)
	}

	return (
		<Radiv
			class={cn(style.sidebar, {
				[style.activeFilters]: url === "/projects",
				[style.activeReturn]: url.startsWith("/projects/"),
			})}
			urls={{
				"/": cn({
					// splash
					[style.tDark]: page === 0,
					[style.hSalmonAlt]: page === 0,
					// story
					[style.tSalmon]: page >= 1,
					[style.hMedium]: page >= 1,
				}),
				"/projects": cn(style.tDark, style.hSalmon),
				"/projects/*": cn(style.tDark, style.hSalmon),
				"/about": cn(style.tDark, style.hSalmonAlt),
				"/policy-copyrights": cn(style.tDark, style.hMedium),
			}}
			>

			<a
				class={cn(style.logo, {
					[style.active]: isMenuVisible,
				})}
				href="/"
				title="home"
				>
				<Logo />
			</a>

			<div
				class={cn(style.menuToggle, {
					[style.active]: isMenuVisible,
					[style.story]: page === 1 && url === "/",
				})}
				onClick={() => toggleMenu()}
				>
				{isMenuVisible ? "hide menu" : "show menu"}
			</div>
			<nav
				class={cn(style.menu, {
					[style.visible]: isMenuVisible,
				})}
				>
				<Link
					class={style.link}
					activeClassName={style.active}
					href="/about"
					title="about"
					onClick={() => toggleMenu(false)}
					>
					about
				</Link>
				<Link
					class={style.link}
					activeClassName={style.active}
					href="/projects"
					title="personal projects"
					onClick={() => toggleMenu(false)}
					>
					personal projects
				</Link>
				<Link
					class={cn(style.link, style.last)}
					href="/policy-copyrights"
					title="policy & copyrights"
					onClick={() => toggleMenu(false)}
					>
					policy & copyrights
				</Link>          
			</nav>

			{url === "/projects" && <Filters overrideClass={style.filters} />}
		</Radiv>
	)
}

export default Sidebar