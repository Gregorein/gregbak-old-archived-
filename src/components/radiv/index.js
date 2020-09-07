import {
	useState,
	useEffect,
} from "preact/hooks"
import {
	subscribers,
	getCurrentUrl
} from "preact-router"

import cn from "classnames"

// route aware div
const RAdiv = ({urls, children, ...props}) => {
	const [nextUrl, setNextUrl] = useState(null)

	// subscribe to url changes for urlClassMap updates
	useEffect(() => {
		subscribers.push(setNextUrl)
		return () => {
			subscribers.splice(subscribers.indexOf(setNextUrl)>>>0, 1)
		}
	}, [])

	let url = nextUrl || getCurrentUrl()
	let path = url.replace(/\?.+$/, "")
	setNextUrl(null)

	// build url Class map for styles
	let defaultUrl = ""
	// let matchedUrl = false
	let urlClassMap = {}
	for (let u in urls) {
		if (defaultUrl === "") defaultUrl = u
		const _u = new RegExp(`^${u.replace(/\*/g, ".+")}$`)

		const urlClass = urls[u] || ""
		if (path.match(_u) !== null) {
			// matchedUrl = true
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

export default RAdiv