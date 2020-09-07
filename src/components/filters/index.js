import {connect} from "react-redux"

import {
	resetFilters,
	toggleFilter
} from "actions/projects"

import cn from "classnames"
import style from "./style"

const Filters = ({overrideClass, count, filters, resetFilters, toggleFilter}) => (
	<div class={cn(overrideClass, style.wrapper)}>
		<div
			class={style.reset}
			onClick={resetFilters}
			>
			reset tags
		</div>

		<div class={style.filters}>
			{filters.map(f => (
				<div
					class={cn(style.filter, {
						[style.active]: f.active,
					})}
					onClick={() => toggleFilter(f.tag)}
					>
					{f.name}
				</div>
			))}
		</div>

		<p class={cn(style.count, {
			[style.noSelection]: count === undefined,
		})}>
			{count === undefined ? "showing all projects" : `found ${count} project${count !== 1 ? "s": ""}`}
		</p>
	</div>
)


const stateProps = (state, props) => ({
	count: state.projects.filteredCount,
	filters: state.projects.filters,
})
const dispatchProps = (dispatch, props) => ({
	resetFilters: () => dispatch(resetFilters()),
	toggleFilter: tag => dispatch(toggleFilter(tag)),
})

export default connect(stateProps, dispatchProps)(Filters)