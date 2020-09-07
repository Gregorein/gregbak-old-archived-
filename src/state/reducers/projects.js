import {
	RESET_FILTERS,
	TOGGLE_FILTER,

	GET_PROJECTS,
	GET_PROJECTS_ERROR,
	GET_PROJECT,
	GET_PROJECT_ERROR,
	CLEAR_PROJECT,
} from "types/projects"
import initialState from "models/projects"

const projects = (state=initialState, action) => {
	switch (action.type) {
		case RESET_FILTERS: {
			let filters = state.filters.map(f => ({
				...f,
				active: false,
			}))
			let list = state.list.map(p => ({
				...p,
				visible: true,
			}))

			return {
				...state,
				filters,
				list,
				filteredCount: undefined,
			}
		}

		case TOGGLE_FILTER: {
			let filteredCount = state.list.length
			const filters = state.filters.map(f => ({
				...f,
				active: (f.tag === action.payload.tag) ? !f.active : f.active,
			}))

			const activeTags = filters.filter(f => f.active).map(f => f.tag)

			const list = state.list.map(p => {
				p.visible = true

				if (activeTags.filter(tag => !p.tag.includes(tag)).length) {
					p.visible = false
					filteredCount--
				}

				return p
			})

			if (filteredCount === state.list.length) filteredCount = undefined

			return {
				...state,
				filters,
				list,
				filteredCount,
			}
		}

		case GET_PROJECTS: {
			let list = action.payload.list.map(p => ({
				...p,
				visible: true,
			}))

			return {
				...state,
				list,
				listError: false,
			}
		}
		case GET_PROJECTS_ERROR: {
			return {
				...state,
				listError: true,
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

export default projects