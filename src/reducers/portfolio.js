import {api} from "globals"

const initialState = {
	filters: [
		{name: "wip", tag: "wip"},
		{name: "design", tag: "design"},
		{name: "art", tag: "art"},
		{name: "2d", tag: "2d"},
		{name: "3d", tag: "3d"},
		{name: "web", tag: "web"},
		{name: "code", tag: "code"}
	],
	filteredCount: undefined,
	projects: []
}

const portfolio = (state = initialState, action) => {
	switch (action.type) {
		case "RESET_FILTERS":
			return {
				...state,
				filters: state.filters.map(filter => {
					filter.active = false
					
					return filter
				}),
				projects: state.projects.map(project => {
					project.visible = true

					return project
				})
			}

		case "TOGGLE_FILTER":
			return {
				...state,
				filters: state.filters.map(filter => {
					if (filter.active === undefined) {
						filter.active = false
					}

					if (filter.tag === action.payload.tag) {
						filter.active = !filter.active
					}

					return filter
				}),
				projects: state.projects.map(project => {
					// if (project.visible === undefined) {
					// 	project.visible = true
					// }

					console.log(project.tag.includes(action.payload.tag))

					return project
				})
			}

		case "GET_PROJECTS":
			return {
				...state,
				projects: action.payload.projects
			}

		default:
			return state
	}
}

export default portfolio
