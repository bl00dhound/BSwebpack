const webpack = require("webpack")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
							presets: ['env']
					}
				}
			},
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
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
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
	// plugins: [new webpack.optimize.UglifyJsPlugin({
	// 	minimize: true,
	// 	compress: {
	// 		warnings: false
	// 	}
	// })],
	devServer: {
		inline:true,
		port: 8081
	}
}