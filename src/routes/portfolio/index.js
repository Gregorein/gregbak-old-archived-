import {
  h,
  Component,
} from "preact"
import {connect} from "react-redux"

import {getProjects} from "actions/portfolio"

import View from "components/view"
import Tile from "components/tile"

import style from "./style"

class Portfolio extends Component {
  componentWillMount() {
    const {
      projects,
      getProjects,
    } = this.props

    if (projects.length === 0) getProjects()
  }

  render({projects}) {
    return (
      <View class={style.view}>
        {projects.map(p => p.visible && <Tile project={p} />)}
      </View>
    )
  }
}

const stateProps = (state, props) => ({
  projects: state.portfolio.projects,
})
const dispatchProps = (dispatch, props) => ({
  getProjects: () => dispatch(getProjects()),
})

export default connect(stateProps, dispatchProps)(Portfolio)