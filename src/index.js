import {
  h,
  Component,
} from "preact"
import {Router} from "preact-router"

import moment from "moment"

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
import Portfolio from "routes/portfolio"
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
moment.relativeTimeRounding(Math.floor)
moment.relativeTimeThreshold("ss", 15)
moment.relativeTimeThreshold("s", 60)
moment.relativeTimeThreshold("m", 45)
moment.relativeTimeThreshold("h", 18)
moment.relativeTimeThreshold("d", 45)
moment.relativeTimeThreshold("M", 24)

// app
export default class App extends Component {
  state = {
    page: undefined,
  }

  handleRoute = e => {
    this.setState({
      currentUrl: e.url,
    })
  }
  handleSidebar = page => {
    this.setState({
      page,
    })
  }

  render({}, {currentUrl, page}) {
    return (
      <div id="app">
        <Provider store={store}>
          <main>
            <Splash />
            <Sidebar page={page} url={currentUrl} />
            <Router onChange={this.handleRoute}>
              <Home
                path="/"
                handleSidebar={this.handleSidebar}
                page={page}
                />
              <Portfolio path="/portfolio" />
              <Project path="/portfolio/:project" />
              <About path="/about" />
              <PolicyCopyrights path="/policy-copyrights" />
            </Router>
          </main>
        </Provider>
      </div>
    )
  }
}