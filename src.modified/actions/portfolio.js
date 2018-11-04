import config from "config"
import {api} from "globals"

export const resetFilters = () => ({
	type: "RESET_FILTERS",
})

export const toggleFilter = tag => ({
	type: "TOGGLE_FILTER",
	payload: {
		tag,
	},
})

export const getProjects = () => dispatch => {
	api(`${config.api}/portfolio.json`)
	.then(data => {
		dispatch({
			type: "GET_PROJECTS",
			payload: {
				projects: data,
			},
		})
	})
	.catch(e => {
		console.error(e)
		dispatch({type: "GET_PROJECTS_ERROR"})
	})
}

export const getProject = project => dispatch => {
	api(`${config.api}/projects/${project}.json`)
	.then(data => {
		dispatch({
			type: "GET_PROJECT",
			payload: {
				project: data,
			},
		})
	})
	.catch(e => {
		console.error(e)
		dispatch({type: "GET_PROJECT_ERROR"})
	})
}

export const clearProject = () => ({
	type: "CLEAR_PROJECT",
})