import path from "path"
import webpack from "webpack"
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"

export default {
	/* set aliases */
	alias: {
		assets: path.resolve(__dirname, "src/assets"),
		icons: path.resolve(__dirname, "src/assets/icons"),
		images: path.resolve(__dirname, "src/assets/images"),
		styles: path.resolve(__dirname, "src/assets/styles"),

		routes: path.resolve(__dirname, "src/routes"),
		components: path.resolve(__dirname, "src/components"),

		state: path.resolve(__dirname, "src/state"),
		types: path.resolve(__dirname, "src/state/types"),
		models: path.resolve(__dirname, "src/state/models"),
		actions: path.resolve(__dirname, "src/state/actions"),
		reducers: path.resolve(__dirname, "src/state/reducers"),

		globals: path.resolve(__dirname, "src/globals.js"),
	},
	plugins: [
		new webpack.DefinePlugin({ /* set API var */
			"process.env.NODE_ENV": JSON.stringify(env.isProd ? "production" : "development"),
			"API": JSON.stringify(env.isProd ? 'https://gregbak.com/api' : 'http://localhost:8000/api'),
		}),
		new BundleAnalyzerPlugin(),
	],
	webpack(config, env, helpers, options) {
		/* add paths to CSS watchers */
		config.module.loaders[4].include = [
			path.resolve(__dirname, "src", "routes"),
			path.resolve(__dirname, "src", "components"),
		]

		config.module.loaders[5].exclude = [
			path.resolve(__dirname, "src", "routes"),
			path.resolve(__dirname, "src", "components"),
		]
	},	
}