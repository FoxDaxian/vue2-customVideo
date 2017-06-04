const webpack = require('webpack');
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		app: resolve("src/components/video/")
	},
	output: {
		path: config.pack.assetsRoot,
		filename: `${config.pack.libraryName}.js`,
		publicPath: config.pack.assetsPublicPath,
		library:config.pack.libraryName,
		libraryTarget:"umd"
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	module: {
		rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: vueLoaderConfig
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			include: [resolve('src'), resolve('test')]
		},
		{
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.packAssetsPath('img/[name].[hash:7].[ext]')
			}
		},
		{
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.packAssetsPath('fonts/[name].[hash:7].[ext]')
			}
		}
		]
	},
	plugins:[
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			drop_console: false
		}
	})
	]
}
