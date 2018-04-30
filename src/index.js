import {h, Component} from "preact"
import {Router} from "preact-router"

import moment from "moment"

import {Provider} from "preact-redux"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "reducers"
// import Route, {FadeAnimation} from "liquid-route"
// import "liquid-route/style.css"

import Splash from "components/splash"
import Sidebar from "components/sidebar"

import Home from "routes/home"
import Portfolio from "routes/portfolio"
import Project from "routes/project"
import Contact from "routes/home"
import About from "routes/about"
import PolicyCopyrights from "routes/policy-copyrights"

import "./style"

// dev
if (module.hot) {
	require("preact/debug")
}

// stores
const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

// moment
moment.relativeTimeRounding(Math.floor)
moment.relativeTimeThreshold("ss", 15)
moment.relativeTimeThreshold("s", 60)
moment.relativeTimeThreshold("m", 45)
moment.relativeTimeThreshold("h", 18)
moment.relativeTimeThreshold("d", 45)
moment.relativeTimeThreshold("M", 24)

// love and magic
export default class App extends Component {
	state = {
		splashStep: 3
	}

	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		})
	}
	
	handleSplash = () => {
		let step = 1000

		setTimeout(() => { 
			this.setState({
				splashStep: 2
			})
		}, step)
		setTimeout(() => {
			this.setState({
				splashStep: 1
			})
		}, step*2)
		setTimeout(() => {
			this.setState({
				splashStep: 0
			})
		}, step*3)	
	}

	componentDidMount() {
		this.handleSplash()
	}

	render() {
		return (
			<div id="app">
				<Provider store={store}>
					<main>
						{/*<Splash state={this.state.splashStep} />*/}
						<Sidebar url={this.state.currentUrl} />
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Portfolio path="/portfolio" />
							<Project path="/portfolio/:project" />
							<Contact path="/contact" />
							<About path="/about" />
							<PolicyCopyrights path="/policy-copyrights" />
						</Router>
					</main>
				</Provider>
			</div>
		)
	}
}
