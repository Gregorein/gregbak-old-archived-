import {
  h,
  Component,
} from "preact"
import {connect} from "preact-redux"

import {
  resetFilters,
  toggleFilter
} from "actions/portfolio"

import cn from "classnames"
import style from "./style"

class Filters extends Component {
  renderFilters = () => {
    const {
      filters=[],
      toggleFilter,
    } = this.props

    return filters.map(f => (
      <div
        class={cn(style.filter, {
          [style.active]: f.active,
        })}
        onClick={() => toggleFilter(f.tag)}
        >
        {f.name}
      </div>
    ))
  }

  render({overrideClass, count, filters, resetFilters}) {      
    return (
      <div class={cn(overrideClass, style.wrapper)}>
        <div
          class={style.reset}
          onClick={resetFilters}
          >
          reset tags
      </div>

      <div class={style.filters}>
        {this.renderFilters()}
      </div>

      <p class={cn(style.count, {
        [style.noSelection]: count === undefined,
      })}>
        {count === undefined ? "showing all projects" : `found ${count} project${count !== 1 ? "s": ""}`}
      </p>
    </div>
    )
  }
}

const stateProps = (state, props) => ({
  count: state.portfolio.filteredCount,
  filters: state.portfolio.filters,
})
const dispatchProps = (dispatch, props) => ({
  resetFilters: () => dispatch(resetFilters()),
  toggleFilter: tag => dispatch(toggleFilter(tag)),
})

export default connect(stateProps, dispatchProps)(Filters)