import {h, render, Component} from "preact"
import {connect} from "preact-redux"
import {route} from "preact-router"
import moment from "moment"
import config from "config"
import cn from "classnames"

import Loader from "components/loader"
import View from "components/view"
import ImageTile from "components/imageTile"
import ImageOverlay from "components/imageOverlay"

import styles from "./style"

import {
	getProject,
	clearProject
} from "actions"


class Project extends Component {
	constructor() {
		super()

		this.overlay = undefined
	}

	componentWillMount() {
		const {getProject, matches: {project}} = this.props

		window.scroll(0,0)
		getProject(project)
	}
	componentWillUnmount() {
		const {clearProject} = this.props

		clearProject()
	}
	componentWillReceiveProps(newProps) {
		if (newProps.error) route("/portfolio")
	}
	
	closeOverlay = () => {
		const overlayNode = document.getElementById("overlay")

		overlayNode.parentNode.style.overflow = ""
		render(null, overlayNode, this.overlay)
		this.overlay = undefined
	}
	renderOverlay = image => {
		const overlayNode = document.getElementById("overlay")

		overlayNode.parentNode.style.overflow = "hidden"
		if (this.overlay !== undefined) render(null, overlayNode, this.overlay)
		this.overlay = render((<ImageOverlay image={image} handleOverlay={this.closeOverlay} />), overlayNode)
	}

	renderSlides = project => {
		return (
			<div class={cn(styles.content, {[styles.single]: project.slides.length === 1})}>
				{project.slides.map((slide, i) => {
					switch(slide.type) {
						case "image":
							return <ImageTile
								{...slide}
								single={project.slides.length === 1}
								first={i === 0}
								handleClick={() => this.renderOverlay(`${config.api}${slide.url}`)}
								/>

						default: return
					}
				})}
			</div>
		)
	}

	renderDescription = project => {
		return (
			<div class={styles.sidebar}>
				<h2 class={styles.title}>
					{project.title}
				</h2>
				<p class={styles.date}>
					{moment.unix(project.date).fromNow()}
				</p>
				<p dangerouslySetInnerHTML={{__html: project.description}} class={styles.description} />
				{project.links && <p class={styles.info}>in the network</p>}
			</div>
		)
	}

	render({project}) {
		return (
			<View class={cn(styles.view, {[styles.single]: project && project.slides.length === 1})}>
				{!project && <Loader />}
				{project && this.renderSlides(project)}
				{project && this.renderDescription(project)}
			</View>
		)
	}
}

const stateProps = (state, props) => ({
	project: state.portfolio.currentProject,
	error: state.portfolio.currentProjectError,
})
const dispatchProps = (dispatch, props) => ({
	getProject: project => dispatch(getProject(project)),
	clearProject: () => dispatch(clearProject())
})

export default connect(stateProps, dispatchProps)(Project)
