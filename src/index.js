import {useState} from "preact/hooks"
import {Router} from "preact-router"

// import moment from "moment"

import {Provider} from "react-redux"
import {
	createStore,
	applyMiddleware,
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "reducers"

import Splash from "components/splash"
import Sidebar from "components/sidebar"

import Home from "routes/home"
import Projects from "routes/projects"
import Project from "routes/project"
import About from "routes/about"
import PolicyCopyrights from "routes/policy-copyrights"

import "styles"

// dev
if (module.hot) require("preact/debug")

// stores
const store = createStore(
	rootReducer,
	applyMiddleware(thunk),
)

// moment
// moment.relativeTimeRounding(Math.floor)
// moment.relativeTimeThreshold("ss", 15)
// moment.relativeTimeThreshold("s", 60)
// moment.relativeTimeThreshold("m", 45)
// moment.relativeTimeThreshold("h", 18)
// moment.relativeTimeThreshold("d", 45)
// moment.relativeTimeThreshold("M", 24)

// app
const App = () => {
	const [page, handleSidebar] = useState(undefined)
	const [currentUrl, setCurrentUrl] = useState(undefined)
	const handleRoute = ({url}) => setCurrentUrl(url)

	return (
		<div id="app">
			<Provider store={store}>
				<>
					<Splash />
					<Sidebar page={page} url={currentUrl} />
					<Router onChange={handleRoute}>
						<Home
							path="/"
							handleSidebar={handleSidebar}
							page={page}
							/>
						<Projects path="/projects" />
						<Project path="/projects/:project" />
						<About path="/about" />
						<PolicyCopyrights path="/policy-copyrights" />
					</Router>
				</>
			</Provider>
		</div>
	)
}

export default App