import {h, Component} from "preact"
import {connect} from "preact-redux"

import {
	getProjects
} from "actions"

import View from "components/view"
import Tile from "components/tile"

import styles from "./style"

class Portfolio extends Component {
	componentWillMount() {
		this.props.getProjects()
	}

	render({projects}) {
		return (
			<View class={styles.view}>
				{projects.map(project => (
					<Tile project={project} />
				))}
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

export default connect(stateProps, dispatchProps)(Portfolio)
