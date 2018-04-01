import "./style"
import {h, Component} from "preact"
import {Router} from "preact-router"
// import Route, {FadeAnimation} from "liquid-route"
import "liquid-route/style.css"

import Splash from "components/splash"
import Sidebar from "components/sidebar"

import Home from "routes/home"
import Portfolio from "routes/home"
import Project from "routes/home"
import Contact from "routes/home"
import About from "routes/about"
import PolicyCopyrights from "routes/policy-copyrights"

if (module.hot) {
	require("preact/debug")
}

export default class App extends Component {
	state = {
		splashStep: 3
	}

	handleRoute = (e) => {
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
		// this.handleSplash()
	}

	render() {
		return (
			<div id="app">				
				{false && <Splash state={this.state.splashStep} />}
				<Sidebar url={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Portfolio path="/portfolio" />
					<Project path="/portfolio/:project" />
					<Contact path="/contact" />
					<About path="/about" />
					<PolicyCopyrights path="/policy-copyrights" />
				</Router>
			</div>
		)
	}
}
