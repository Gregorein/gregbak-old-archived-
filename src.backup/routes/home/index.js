import {h, Component} from "preact"
import {connect} from "preact-redux"

import {
	getProjects
} from "actions"

import cn from "classnames"
import SS from "smooth-scroll"

import View from "components/view"
import Mun from "components/mun"
import Tile from "components/tile"

import styles from "./style"

class Home extends Component {
	constructor() {
		super()

		this.project = undefined

		const ss = new SS('a[href*="#"]')
	}

	onScroll = e => {
		const {sidebarStep, handleSidebarStep} = this.props

		const maxHeight = document.querySelector("#view").clientHeight
		const windowHeight = window.innerHeight
		const currentHeight = window.scrollY

		let _currentStep = Math.round(currentHeight/windowHeight -.001)
		_currentStep = _currentStep > 0 ? _currentStep : 0

		if(_currentStep !== sidebarStep) {
			handleSidebarStep(_currentStep)
		}
	}

	componentDidMount() {
		this.props.getProjects()
		window.addEventListener("scroll", this.onScroll)
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll)
	}

	componentWillReceiveProps({projects}) {
		if(this.project === undefined) {
			const randomProject = projects[Math.floor(Math.random() * projects.length)]

			this.project = <Tile small project={randomProject} />
		}
	}

	render() {
		return (
			<View id="view" class={styles.view}>
				<section class={styles.section}>
					<div class={styles.mountain} />
					<h1 class={styles.cta}>
						<span class={styles.word1}>i am</span>
						<span class={styles.word2}>Greg</span>
						<span class={styles.word3}>a creative software engineer and an artist from the other</span>
						<span class={styles.word4}>world.</span>
					</h1>
					<a
						class={styles.more}
						href="#story"
						>
						what i do
					</a>
					<Mun />
				</section>
				<section id="story" class={cn(styles.section, styles.dark)}>
					<div class={styles.story}>
						<div class={styles.text}>
							<h2>
								Hi, 
								<span>Welcome to my portfolio!</span>
							</h2> 
							<p>I play a lot with CGI and the uncanny valley, you'll find here the experiments and ideas that I finished between studying and working. Once I'm done with my Master's degree I'll also share a super-secret project!</p>
							<p>Click the tile on your right.</p>
						</div>
						{this.project}
					</div>
				</section>
			</View>
		)
	}
}

const stateProps = (state, props) => ({
	projects: state.portfolio.projects
})
const dispatchProps = (dispatch, props) => ({
	getProjects: () => dispatch(getProjects())
})

export default connect(stateProps, dispatchProps)(Home)


