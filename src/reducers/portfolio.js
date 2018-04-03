import {api} from "globals"

const initialState = {
	filters: [
		{name: "design", tag: "design"},
		{name: "2d", tag: "2d"},
		{name: "3d", tag: "3d"},
		{name: "web", tag: "web"},
		{name: "mobile", tag: "mobile"},
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
				})
			}

		case "TOGGLE_FILTER":
			return {
				...state,
				filters: state.filters.map((filter, id) => {
					if (filter.active === undefined) {
						filter.active = false
					}

					if (id === action.payload.id) {
						filter.active = !filter.active
					}

					return filter
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
