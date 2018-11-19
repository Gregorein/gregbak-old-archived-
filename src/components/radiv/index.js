import {
  h,
  Component,
} from "preact"
import {
  subscribers,
  getCurrentUrl
} from "preact-router"

import cn from "classnames"

export default class radiv extends Component {
  update = url => {
    this.nextUrl = url
    this.setState({})
  }

  componentDidMount() {
    subscribers.push(this.update)
  }
  componentWillUnmount() {
    subscribers.splice(subscribers.indexOf(this.update)>>>0, 1)
  }

  render({urls, children, ...props}) {
    let url = this.nextUrl || getCurrentUrl()
    let path = url.replace(/\?.+$/, "")
    this.nextUrl = null

    let defaultUrl = ""
    let matchedUrl = false
    let urlClassMap = {}
    for (let u in urls) {
      if (defaultUrl === "") defaultUrl = u
      const _u = new RegExp(`^${u.replace(/\*/g, ".+")}$`)

      const urlClass = urls[u] || ""
      if (path.match(_u) !== null) {
        matchedUrl = true
        urlClassMap[urlClass] = true
      }
    }

    return (
      <div
        {...props}
        class={cn(props.class, urlClassMap)}
        >
        {children}
      </div>
    )
  }
}