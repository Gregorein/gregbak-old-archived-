import {useEffect} from "preact/hooks"
import {connect} from "react-redux"

import {getProjects} from "actions/projects"

import View from "components/view"
import Tile from "components/tile"

import style from "./style"

const Projects = ({projects, getProjects}) => {
	useEffect(() => {
		if (projects.length === 0) getProjects()
	}, [])

	return (
		<View
			title="Greg Bak | personal projects"
			class={style.view}
			>
			{projects.map(p => p.visible && <Tile project={p} />)}
		</View>
	)
}

const stateProps = state => ({
	projects: state.projects.list,
})
const dispatchProps = dispatch => ({
	getProjects: () => dispatch(getProjects()),
})

export default connect(stateProps, dispatchProps)(Projects)