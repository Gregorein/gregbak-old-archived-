const initialState = {
	filters: [
		{name: "design", shortcode: "design"},
		{name: "2d", shortcode: "2d"},
		{name: "3d", shortcode: "3d"},
		{name: "web", shortcode: "web"},
		{name: "mobile", shortcode: "mobile"},
		{name: "code", shortcode: "code"}
	],
	filteredCount: undefined,
	projects: [

	]
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

		default:
			return state
	}
}

export default portfolio
