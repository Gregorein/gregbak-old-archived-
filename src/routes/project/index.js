import {render} from "preact"
import {useEffect} from "preact/hooks"
import {route} from "preact-router"
import {connect} from "react-redux"
import {
	getProject,
	clearProject,
} from "actions/projects"

import View from "components/view"
import Loader from "components/loader"
import ImageTile from "components/imageTile"
import ImageOverlay from "components/imageOverlay"

import cn from "classnames"
import style from "./style"

const Project = ({project, getProject, matches, clearProject, error}) => {
	let overlay

	useEffect(() => {
		const {project} = matches
		getProject(project)

		return () => {
			clearProject()
		}
	}, [])
	useEffect(() => {
		if (error) route("/projects")
	}, [error])

	const renderOverlay = (image, height, width, blurhash) => {
		const overlayNode = document.getElementById("overlay")

		overlayNode.parentNode.style.overlay = "hidden"

		if (overlay !== undefined) render(null, overlayNode, overlay)
		overlay = render((
			<ImageOverlay
				handleOverlay={removeOverlay}
				image={image}
				height={height}
				width={width}
				blurhash={blurhash}
				/>
			), overlayNode)
	}
	const removeOverlay = () => {
		const overlayNode = document.getElementById("overlay")

		overlayNode.parentNode.style.overflow = ""

		render(null, overlayNode, overlay)
		overlay = undefined
	}

	const renderSlide = slide => {
		switch(slide.type) {
			case "image":
				return <ImageTile
					{...slide}
					single={project.slides.length === 1}
					handleClick={() => renderOverlay(
						`${API}${slide.url}`,
							slide.height,
							slide.width,
							slide.blurhash
						)}
					/>

			default: return
		}
	}
	const renderSlides = project => {
		const [first, ...other] = project.slides

		// description is rendered between first and other posts, don't move
		return (
			<div class={style.content}>
				{first && renderSlide(first)}
				{renderDescription(project)}
				{other.map(renderSlide)}
			</div>
		)
	}
	const renderDescription = ({title, date, description, links}) => (
		<div class={style.description}>
			<h2 class={style.title}>
				{title}
			</h2>
			<p class={style.date}>
				{moment.unix(date).fromNow()}
			</p>
			<p
				dangerouslySetInnerHTML={{__html: description}}
				class={style.text}
				/>
			{links && <p class={style.info}>in the network</p>}
		</div>
	)

	return (
		<View
			title={`Greg Bak | ${!project ? "loading..." : project.title}`}
			description={!project ? "loading..." : `Greg Bak's project "${project.title}". ${project.description}. Click here to view the project.`}
			class={cn(style.view, {
				[style.single]: project && project.slides.length === 1,
			})}
			>
			{!project && <Loader />}
			{project && renderSlides(project)}
		</View>
	)
}

const stateProps = state => ({
	project: state.projects.currentProject,
	error: state.projects.currentProjectError,
})
const dispatchProps = dispatch => ({
	getProject: project => dispatch(getProject(project)),
	clearProject: () => dispatch(clearProject())
})

export default connect(stateProps, dispatchProps)(Project)