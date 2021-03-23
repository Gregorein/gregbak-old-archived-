import path from "path"
import webpack from "webpack"
import CopyPlugin from "copy-webpack-plugin"
// import OpenBrowserPlugin from "open-browser-webpack-plugin"

export default config => {
	/* set aliases */
	let {alias} =	config.resolve
	alias.assets = path.resolve(__dirname, "src/assets")
	alias.icons = path.resolve(__dirname, "src/assets/icons")
	alias.images = path.resolve(__dirname, "src/assets/images")
	alias.styles = path.resolve(__dirname, "src/assets/styles")

	alias.routes = path.resolve(__dirname, "src/routes")
	alias.components = path.resolve(__dirname, "src/components")

	alias.state = path.resolve(__dirname, "src/state")		
	alias.types = path.resolve(__dirname, "src/state/types")		
	alias.models = path.resolve(__dirname, "src/state/models")
	alias.actions = path.resolve(__dirname, "src/state/actions")
	alias.reducers = path.resolve(__dirname, "src/state/reducers")

	alias.globals = path.resolve(__dirname, "src/globals.js")

	/* set API var */
	config.plugins.push(new webpack.DefinePlugin({
		API: JSON.stringify("https://gregbak-api.herokuapp.com"),
	}))
	config.plugins.push(new CopyPlugin({
		patterns: [
			{from: "robots.txt"},
			{from: ".htaccess"},
		],
	}))
	// config.plugins.push(new OpenBrowserPlugin())
}