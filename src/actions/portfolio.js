import config from "config"
import {api} from "globals"

export const resetFilters = () => ({
	type: "RESET_FILTERS"
})

export const toggleFilter = tag => ({
	type: "TOGGLE_FILTER",
	payload: {
		tag
	}
})

export const getProjects = () => dispatch => {
	api(`${config.api}/portfolio.json`)
	.then(data => {
		dispatch({
			type: "GET_PROJECTS",
			payload: {
				projects: data
			}
		})
	})
}

export const getProject = project => dispatch => {
	api(`${config.api}/projects/${project}.json`)
	.then(data => {
		dispatch({
			type: "GET_PROJECTS",
			payload: {
				projects: data
			}
		})
	})	
}