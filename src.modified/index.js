import {
	h,
	Component,
} from "preact"
import {Router} from "preact-router"

import moment from "moment"

import {Provider} from "preact-redux"
import {
	createStore,
	applyMiddleware,
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "reducers"



import "./style"

// dev
if (module.hot) require("preact/debug")

// stores
const store = createStore(
	rootReducer,
	applyMiddleware(thunk),
)

// moment
moment.relativeTimeRounding(Math.floor)
moment.relativeTimeThreshold("ss", 15)
moment.relativeTimeThreshold("s", 60)
moment.relativeTimeThreshold("m", 45)
moment.relativeTimeThreshold("h", 18)
moment.relativeTimeThreshold("d", 45)
moment.relativeTimeThreshold("M", 24)

// appc
export default class App extends Component {
	state = {

	}

	handleRoute = e => {
		this.setState({
			currentUrl: e.url,
		})
	}

	render({}, {currentUrl}) {
		return (
			<div id="app">
				<Provider {...store}>

				</Provider>
			</div>
		)
	}
}