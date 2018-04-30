import {h, Component} from "preact"
import {connect} from "preact-redux"
import {route} from "preact-router"
import moment from "moment"
import config from "config"
import cn from "classnames"

import Loader from "components/loader"
import View from "components/view"
import ImageTile from "components/imageTile"

import styles from "./style"

import {
	getProject
} from "actions"


class Project extends Component {
	componentWillMount() {
		const {getProject, matches: {project}} = this.props

		getProject(project)
	}
	componentWillReceiveProps(newProps) {
		if(newProps.error) route("/portfolio")
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
								first={i === 0 && project.slides.length > 1}
								handleClick={() => {console.log(`${config.api}${slide.url}`)}}
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
				<p class={styles.description}>
					{project.description}
				</p>
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
	getProject: project => dispatch(getProject(project))
})

export default connect(stateProps, dispatchProps)(Project)
