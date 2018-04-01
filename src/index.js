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
import About from "routes/home"
import PolicyCopyrights from "routes/home"

if (module.hot) {
	require("preact/debug")
}

export default class App extends Component {
	state = {
		splashStep: 4
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
				splashStep: 3
			})
		}, step)
		setTimeout(() => {
			this.setState({
				splashStep: 2
			})
		}, step*2)
		setTimeout(() => {
			this.setState({
				splashStep: 1
			})
		}, step*3)
		setTimeout(() => {
			this.setState({
				splashStep: 0
			})
		}, step*4)
		setTimeout(() => {
			localStorage.setItem("splashPlayed", "true")
		}, step*5)		
	}

	componentDidMount() {
		if (!localStorage.getItem("splashPlayed")) this.handleSplash()
	}

	render() {
		return (
			<div id="app">				
				{!localStorage.getItem("splashPlayed") && <Splash state={this.state.splashStep} />}
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
