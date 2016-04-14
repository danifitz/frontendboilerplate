var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, './client'),
	entry: {
		jsx: './index.js'
		vendor: [
			'react',
			'react-dom'
		]
	},
	output: {
		path: path.join(__dirname, './lib'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loaders: [
				'babel-loader'
			]
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
			}
		})
	],
	devServer: {
		contentBase: './src',
		hot: true
	}
}