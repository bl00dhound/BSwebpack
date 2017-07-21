const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer')

module.exports = {
	context: __dirname,
	devtool: 'eval-source-map',
	entry: './src/js/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module:{
		rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
					{
            loader: 'eslint-loader',
						options: {
            	errorEmit: true
						}
					}
				]
      },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				]
			},
			{
				test: /\.s?css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader'   },
					{ loader: 'sass-loader'  },
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer]
						}
					}
				]
			},
			{
			  test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 10000 }
					},
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		output: {
			comments: false
		},
		minimize: true,
		compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true
		},
		mangle: {
			except: ['$super', '$', 'exports', 'require']
		}
	})],
	devServer: {
		inline:true,
		port: 8081
	}
}
