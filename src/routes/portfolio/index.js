import {useEffect} from "preact/hooks"
import {connect} from "react-redux"

import {getProjects} from "actions/portfolio"

import View from "components/view"
import Tile from "components/tile"

import style from "./style"

const Portfolio = ({projects, getProjects}) => {
	useEffect(() => {
		if (projects.length === 0) getProjects()
	}, [])

	return (
		<View class={style.view}>
			{projects.map(p => p.visible && <Tile project={p} />)}
		</View>
	)
}

const stateProps = (state, props) => ({
	projects: state.portfolio.projects,
})
const dispatchProps = (dispatch, props) => ({
	getProjects: () => dispatch(getProjects()),
})

export default connect(stateProps, dispatchProps)(Portfolio)