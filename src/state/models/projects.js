export default {
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

	list: [],
	listError: false,
	
	currentProject: undefined,
	currentProjectError: false,
}