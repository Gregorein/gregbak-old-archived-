import {api} from "globals"

const initialState = {
	filters: [
		{name: "wip", active: false, tag: "wip"},
		{name: "design", active: false, tag: "design"},
		{name: "art", active: false, tag: "art"},
		{name: "2d", active: false, tag: "2d"},
		{name: "3d", active: false, tag: "3d"},
		{name: "web", active: false, tag: "web"},
		{name: "code", active: false, tag: "code"}
	],
	filteredCount: undefined,
	projects: [],
	currentProject: undefined
}

const portfolio = (state = initialState, action) => {
	switch (action.type) {
		case "RESET_FILTERS":
			let filters = state.filters.map(filter => {
				filter.active = false
				
				return filter
			})

			let projects = state.projects.map(project => {
				project.visible = true

				return project
			})

			return {
				...state,
				filters,
				projects,
				filteredCount: undefined
			}

		case "TOGGLE_FILTER":

			filters = state.filters.map(filter => {
				if (filter.tag === action.payload.tag) {
					filter.active = !filter.active
				}

				return filter
			})

			projects = state.projects.map(project => {
				project.visible = true

				filters.forEach(filter => {
					if(filter.active && !project.tag.includes(filter.tag)) project.visible = false
				})
				return project
			})

			return {
				...state,
				filters,
				projects
			}

		case "GET_PROJECTS":
			projects = action.payload.projects.map(project => {
				project.visible = true

				return project
			})

			return {
				...state,
				projects
			}

		case "GET_PROJECT":
			return {
				...state,
				currentProject: action.payload.project
			}

		default:
			return state
	}
}

export default portfolio
