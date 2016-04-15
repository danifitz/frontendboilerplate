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
			    loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			    ]
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