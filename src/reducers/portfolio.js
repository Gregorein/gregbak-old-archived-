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
	projectsError: false,
	currentProject: undefined,
	currentProjectError: false,
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
			let filteredCount = state.projects.length

			filters = state.filters.map(filter => {
				if (filter.tag === action.payload.tag) {
					filter.active = !filter.active
				}

				return filter
			})

			projects = state.projects.map(project => {
				project.visible = true

				filters.forEach(filter => {
					if (filter.active && !project.tag.includes(filter.tag)) {
						project.visible = false
						filteredCount--
					}
				})
				return project
			})

			if (filteredCount === state.projects.length) filteredCount = undefined

			return {
				...state,
				filters,
				filteredCount,
				projects
			}

		case "GET_PROJECTS":
			projects = action.payload.projects.map(project => {
				project.visible = true

				return project
			})

			return {
				...state,
				projects,
				projectsError: false,
			}
		case "GET_PROJECTS_ERROR":
			return {
				...state,
				projectsError: true,
			}

		case "GET_PROJECT":
			return {
				...state,
				currentProject: action.payload.project,
				currentProjectError: false,
			}
		case "GET_PROJECT_ERROR":
			return {
				...state,
				currentProjectError: true,
			}

		default:
			return state
	}
}

export default portfolio
