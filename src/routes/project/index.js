import {h, Component} from "preact"
import {connect} from "preact-redux"

import Loader from "components/loader"

import View from "components/view"

import styles from "./style"

import {
	getProject
} from "actions"

class Project extends Component {
	componentWillMount() {
		const {getProject, matches: {project}} = this.props

		getProject(project)
	}

	render({project}) {
		console.log(project)

		return (
			<View class={styles.view}>
				<Loader />
			</View>
		)
	}
}

const stateProps = (state, props) => ({
	project: state.portfolio.currentProject
})
const dispatchProps = (dispatch, props) => ({
	getProject: project => dispatch(getProject(project))
})

export default connect(stateProps, dispatchProps)(Project)
