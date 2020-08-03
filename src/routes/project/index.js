import {
  h,
  render,
  Component,
} from "preact"
import {route} from "preact-router"
import moment from "moment"
import {connect} from "react-redux"
import {
  getProject,
  clearProject,
} from "actions/portfolio"

import View from "components/view"
import Loader from "components/loader"
import ImageTile from "components/imageTile"
import ImageOverlay from "components/imageOverlay"

import cn from "classnames"
import style from "./style"

class Project extends Component {
  overlay

  componentWillMount() {
    const {
      getProject,
      matches: {
        project,
      },
    } = this.props

    getProject(project)
  }
  componentWillUnmount() {
    const {clearProject} = this.props

    clearProject()
  }
  componentWillReceiveProps({error}) {
    if (error) route("/portfolio")
  }

  closeOverlay = () => {
    const overlayNode = document.getElementById("overlay")

    overlayNode.parentNode.style.overflow = ""

    render(null, overlayNode, this.overlay)
    this.overlay = undefined
  }
  renderOverlay = image => {   
    const overlayNode = document.getElementById("overlay")

    overlayNode.parentNode.style.overlay = "hidden"

    if (this.overlay !== undefined) render(null, overlayNode, this.overlay)
    this.overlay = render((
      <ImageOverlay
        image={image}
        handleOverlay={this.closeOverlay}
        />
      ), overlayNode)
  }

  renderSlide = slide => {
    const {project} = this.props

    switch(slide.type) {
      case "image":
        return <ImageTile
          {...slide}
          single={project.slides.length === 1}
          handleClick={() => this.renderOverlay(`${API}${slide.url}`)}
          />

      default: return
    }
  }

  renderSlides = project => {
    const [first, ...other] = project.slides

    return (
      <div class={style.content}>
        {first && this.renderSlide(first)}        
        {this.renderDescription(project)}
        {other.map(this.renderSlide)}
      </div>
    )
  }

  renderDescription = project => (
    <div class={style.description}>
      <h2 class={style.title}>
        {project.title}
      </h2>
      <p class={style.date}>
        {moment.unix(project.date).fromNow()}
      </p>
      <p
        dangerouslySetInnerHTML={{__html: project.description}}
        class={style.text}
        />
      {project.links && <p class={style.info}>in the network</p>}
    </div>
  )

  render({project}) {
    return (
      <View
        class={cn(style.view, {
          [style.single]: project && project.slides.length === 1,
        })}
        >
        {!project && <Loader />}
        {project && this.renderSlides(project)}
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