import {
	RESET_FILTERS,
	TOGGLE_FILTER,

	GET_PROJECTS,
	GET_PROJECTS_ERROR,
	GET_PROJECT,
	GET_PROJECT_ERROR,
	CLEAR_PROJECT,
} from "types/portfolio"
import initialState from "models/portfolio"

const portfolio = (state=initialState, action) => {
	switch (action.type) {
		case RESET_FILTERS: {
			let filters = state.filters.map(f => ({
				...f,
				active: false,
			}))
			let projects = state.projects.map(p => ({
				...p,
				visible: true,
			}))

			return {
				...state,
				filters,
				projects,
				filteredCount: undefined,
			}
		}

		case TOGGLE_FILTER: {
			let filteredCount = state.projects.length
			const filters = state.filters.map(f => ({
				...f,
				active: (f.tag === action.payload.tag) ? !f.active : f.active,
			}))

			const activeTags = filters.filter(f => f.active).map(f => f.tag)

			const projects = state.projects.map(p => {
				p.visible = true

				if (activeTags.filter(tag => !p.tag.includes(tag)).length) {
					p.visible = false
					filteredCount--
				}

				return p
			})

			if (filteredCount === state.projects.length) filteredCount = undefined

			return {
				...state,
				filters,
				projects,
				filteredCount,
			}
		}

		case GET_PROJECTS: {
			let projects = action.payload.projects.map(p => ({
				...p,
				visible: true,
			}))

			return {
				...state,
				projects,
				projectsError: false,
			}
		}
		case GET_PROJECTS_ERROR: {
			return {
				...state,
				projectsError: true,
			}
		}

		case GET_PROJECT: {
			return {
				...state,
				currentProject: action.payload.project,
				currentProjectError: false,
			}
		}
		case GET_PROJECT_ERROR: {
			return {
				...state,
				currentProjectError: true,
			}
		}

		case CLEAR_PROJECT: {
			return {
				...state,
				currentProject: undefined,
				currentProjectError: false,
			}
		}

		default:
			return state
	}
}

export default portfolio