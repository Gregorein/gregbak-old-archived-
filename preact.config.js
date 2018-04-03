import path from "path"

export default (config, env, helpers) => {
	let {alias} = config.resolve

	alias.actions = path.resolve(__dirname, "src/actions")
	alias.assets = path.resolve(__dirname, "src/assets")
	alias.images = path.resolve(__dirname, "src/assets/images")
	alias.icons = path.resolve(__dirname, "src/assets/icons")
	alias.containers = path.resolve(__dirname, "src/containers")
	alias.components = path.resolve(__dirname, "src/components")
	alias.routes = path.resolve(__dirname, "src/routes")
	alias.reducers = path.resolve(__dirname, "src/reducers")
}
