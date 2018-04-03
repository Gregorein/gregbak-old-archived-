export const resetFilters = () => ({
	type: "RESET_FILTERS"
})

export const toggleFilter = id => ({
	type: "TOGGLE_FILTER",
	payload: {
		id
	}
})
