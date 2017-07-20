const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
	context: __dirname,
	devtool: 'eval-source-map',
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
          {
            loader: 'eslint-loader',
            options: {
              quiet: true
            }
          },
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
						options: { limit: 40000 }
					},
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		}
	})],
	devServer: {
		inline:true,
		port: 8081
	}
}