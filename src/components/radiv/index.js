import {h, Component} from "preact"

import cn from "classnames"

import {subscribers, getCurrentUrl} from "preact-router"

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

		let urlClassMap = {}
		Object.keys(urls).forEach(u => {
			const _u = new RegExp(`^${u.replace(/\*/g, ".+")}$`)

			urlClassMap[urls[u]] = path.match(_u) !== null
		})

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