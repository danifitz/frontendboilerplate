var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, './src'),
	entry: {
		jsx: './index.jsx',
		html: './index.html'
	},
	output: {
		path: path.join(__dirname, './static'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		    {
			    test: /\.(js|jsx)$/,
			    exclude: /node_modules/,
			    loader: 'babel-loader',
			    query: {
			    	presets: ['es2015', 'react']
			    }
		    },
		    {
			    test: /\.html$/,
			    loader: 'file?name=[name].[ext]'
		    },
		    {
			    test: /\.css$/,
			    include: /src/,
			    loader: 'style-loader!css-loader'
		    }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		contentBase: './src',
		hot: true
	}
}