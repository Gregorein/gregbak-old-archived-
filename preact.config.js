import path from "path";

export default (config, env, helpers) => {
	let {alias} = config.resolve;

	alias.assets = path.resolve(__dirname, "src/assets");
	alias.components = path.resolve(__dirname, "src/components");
	alias.routes = path.resolve(__dirname, "src/routes");
};