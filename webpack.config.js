const path = require('path');
var webpack = require('webpack');

module.exports = {
	devServer: {
		contentBase: './views',
		port: 8088,
		
	},

	plugins: [
        new webpack.ProvidePlugin({
            '$': "jquery",
            'window.jQuery': "jquery",
            'jQuery': 'jquery',
            'window.$': 'jquery',
	})
	],

	devtool: 'inline-source-map',
	target:"web",
	entry: './src/main.jsx',
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		loaders: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {presets: ['es2015', 'react']}
			},{
			test: /\.css$/,
			loader: ['style-loader','css-loader']
			},{
			test: /\.less$/,
			loader: ['style-loader','css-loader','less-loader']
			}]
		}
};