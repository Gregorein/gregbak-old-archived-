import "./style";
import { h, Component } from "preact";
import { Router } from "preact-router";

import Home from "routes/home";

if (module.hot) {
	require("preact/debug");
}

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
