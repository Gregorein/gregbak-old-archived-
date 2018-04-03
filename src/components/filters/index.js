import {h, Component} from "preact"
import {connect} from "preact-redux"

import cn from "classnames"

import {
	resetFilters,
	toggleFilter
} from "actions"

import styles from "./style"

class Filters extends Component {
	renderFilters = () => {
		const {filters, toggleFilter} = this.props
		return filters.map((filter, id) => {
			
			return (
				<div
					class={cn(styles.filter, {
						[styles.a]: filter.active
					})}
					onClick={() => toggleFilter(id)}
					>
					{filter.name}
				</div>
			);
		});
	}

	render({count, filters, resetFilters}) {
		return (
			<div class={styles.wrapper}>
				<div 
					class={styles.reset}
					onClick={() => resetFilters()}
					>
					reset tags
				</div>

				<div class={styles.filters}>
					{this.renderFilters()}
				</div>

				{count >= 0 ? (
					<p class={styles.count}>
						found {count} project{count !== 1 ? "s" : ""}
					</p>
				) : (
					<p class={styles.noSelection}>
							showing all projects
					</p>
				)}
			</div>
		)
	}
}

const stateProps = (state, props) => ({
	count: state.portfolio.filteredCount,
	filters: state.portfolio.filters
})
const dispatchProps = (dispatch, props) => ({
	resetFilters: () => dispatch(resetFilters()),
	toggleFilter: id => dispatch(toggleFilter(id))
})

export default connect(stateProps, dispatchProps)(Filters)
