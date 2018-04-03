import {api} from "globals"

export const resetFilters = () => ({
	type: "RESET_FILTERS"
})

export const toggleFilter = id => ({
	type: "TOGGLE_FILTER",
	payload: {
		id
	}
})

export const getProjects = () => dispatch => {
	api("http://0.0.0.0:9090/api/portfolio.json")
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
	api(`http://0.0.0.0:9090/api/projects/${project}.json`)
	.then(data => {
		dispatch({
			type: "GET_PROJECTS",
			payload: {
				projects: data
			}
		})
	})	
}