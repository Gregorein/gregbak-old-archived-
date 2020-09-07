import {api} from "globals"

import {
	RESET_FILTERS,
	TOGGLE_FILTER,

	GET_PROJECTS,
	GET_PROJECTS_ERROR,
	GET_PROJECT,
	GET_PROJECT_ERROR,
	CLEAR_PROJECT,
} from "types/projects"

export const resetFilters = () => ({
	type: RESET_FILTERS,
})

export const toggleFilter = tag => ({
	type: TOGGLE_FILTER,
	payload: {
		tag,
	},
})

export const getProjects = () => dispatch => {
	api(`${API}/projects.json`)
	.then(data => {
		dispatch({
			type: GET_PROJECTS,
			payload: {
				list: data,
			},
		})
	})
	.catch(e => {
		console.error(e)
		dispatch({
			type: GET_PROJECTS_ERROR,
		})
	})
}

export const getProject = project => dispatch => {
	api(`${API}/projects/${project}.json`)
	.then(data => {
		dispatch({
			type: GET_PROJECT,
			payload: {
				project: data,
			},
		})
	})
	.catch(e => {
		console.error(e)
		dispatch({
			type: GET_PROJECT_ERROR,
		})
	})
}

export const clearProject = () => ({
	type: CLEAR_PROJECT,
})