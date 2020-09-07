import path from "path"
import webpack from "webpack"
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"
const BundleAnalyzer = BundleAnalyzerPlugin.BundleAnalyzerPlugin; 

import OpenBrowserPlugin from "open-browser-webpack-plugin"

export default (config, env) => {
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
		"process.env.NODE_ENV": JSON.stringify(env.isProd ? "production" : "development"),
	  API: JSON.stringify(env.isProd ? 'https://gregbak.com/api' : 'http://localhost:8000/api'),
	}))
	// config.plugins.push(new BundleAnalyzer({
	// 	openAnalyzer: false,
	// 	analyzerHost: "localhost",
	// 	analyzerPort: "9000",
	// 	generateStatsFile: true,
	// }))
	config.plugins.push(new OpenBrowserPlugin())
}