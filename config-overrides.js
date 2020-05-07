module.exports = function override(config, env) {
	if (config.mode === 'development') return config;

	const name = process.env.npm_package_name;
	// const version = process.env.npm_package_version;

	config.entry = './src/single-spa-root.js';

	config.output = {
		...config.output,
		filename: `static/js/${name}.js`,
		libraryTarget: 'system',
	};

	delete config.optimizations;
	config.optimization.runtimeChunk = false;
	config.optimization.splitChunks = {
		cacheGroups: {
			default: false,
		},
	};

	config.plugins = config.plugins.filter(
		(plugin) => plugin.constructor.name !== 'HtmlWebpackPlugin'
	);
	config.plugins = config.plugins.map((plugin) => {
		if (plugin.constructor.name === 'MiniCssExtractPlugin') {
			plugin.options.filename = `static/css/${name}.css`;
		}
		return plugin;
	});

	config.devServer = {
		historyApiFallback: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		disableHostCheck: true,
	};

	return config;
};
