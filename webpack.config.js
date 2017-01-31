module.exports = {
    entry:'./App',
    output: {
        path:'',
        filename:'bundle.js'
    },

    devServer: {
        port: 3333,
        contentBase: '',
        colors: true,
        historyApiFallback: true,
        inline: true
    },

    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
     {
         test: /\.less$/,
        exclude: /node-modules/, 
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
            }
     
        ]
    }


}
// "use strict";
// var webpack = require('webpack');
// var path = require('path');
// var loaders = require('./webpack.loaders');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// const HOST = process.env.HOST || "127.0.0.1";
// const PORT = process.env.PORT || "8888";

// loaders.push(
// 	{
// 		test: /\.css$/,
// 		use: ['style', 'css']
// 	},
// 	{
// 		test: /\.scss$/,
// 		loader: ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
// 		exclude: ['node_modules']
// 	});

// module.exports = {
// 	entry: [
// 		'react-hot-loader/patch',
// 		'./App.js', // your app's entry point
// 		'./style.css'
// 	],
// 	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
// 	output: {
// 		publicPath: '/',
// 		path: path.join(__dirname, 'public'),
// 		filename: 'bundle.js'
// 	},
// 	resolve: {
// 		extensions: ['', '.js', '.jsx']
// 	},
// 	module: {
// 		loaders
// 	},
// 	devServer: {
// 		contentBase: "./public",
// 		// do not print bundle build stats
// 		noInfo: true,
// 		// enable HMR
// 		hot: true,
// 		// embed the webpack-dev-server runtime into the bundle
// 		inline: true,
// 		// serve index.html in place of 404 responses to allow HTML5 history
// 		historyApiFallback: true,
// 		port: PORT,
// 		host: HOST
// 	},
// 	plugins: [
// 		new webpack.NoErrorsPlugin(),
// 		new webpack.HotModuleReplacementPlugin(),
// 		new ExtractTextPlugin("style.css", {
// 			allChunks: true,
// 			filename: "styles.css"
// 		}),
// 		new DashboardPlugin(),
// 		new HtmlWebpackPlugin({
// 			template: './index.html',
// 			files: {
// 				css: ['style.css'],
// 				js: ["bundle.js"],
// 			}
// 		}),
// 	]
// };
//  const path = require('path');
//  const webpack = require('webpack');
//  const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: [
//         `webpack-dev-server/`,
//         'webpack/hot/only-dev-server',
//         // 'react-hot-loader/patch',
//         './index.html'
//     ],
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js'     
//     },
//     plugins: [
//         new webpack.SourceMapDevToolPlugin(),
//         new webpack.DefinePlugin({
//             '__DEV__': true
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin(),
//         new HtmlWebpackPlugin({
//             template: 'index.html', // Load a custom template 
//             inject: 'body' // Inject all scripts into the body 
//         })
//     ],
//     module: {
//         loaders: [{
//             test: /\.js?$/,
//             loaders: ['babel?retainLines=true'],
//             include: path.join(__dirname)
//         },{ test: /\.html$/,
//     loader: 'html'}]
//     }
// };
// module.exports = {
//     entry:'./App',
//     output: {
//         path: "${workspaceRoot}./dist",
//         filename:'bundle.js'
//     },

//     devServer: {
//         port: 3333,
//         contentBase: '',
//         colors: true,
//         historyApiFallback: true,
//         inline: true
//     },

//     module: {
//         loaders: [
//             {
//                 test:/\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader'
//             }
//         ]
//     }


// }
