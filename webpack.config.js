const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	output: {
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					sources: false,
					

				}
			}
		]
	},
	plugins: [
		new HtmlWebpack({
			//title: 'Mi Webpack App',
			//filename: 'index.html',
			template: 'src/index.html'
		})
	]
};