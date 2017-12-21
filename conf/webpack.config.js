const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(process.cwd(), 'src'), // the home directory for webpack

  devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools

  entry: {
    app: './index.js',
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },

  resolve: {
    extensions: ['.js'], // extensions that are used
    modules: [path.join(process.cwd(), 'src'), 'node_modules'], // directories where to look for modules
  },

  devServer: {
    // publicPath: '/',
    // port: 9000,
    contentBase: path.join(process.cwd(), 'dist'), // static file location
    // host: 'localhost',
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },

  module: {
    rules: [{
      enforce: 'pre', // to check source files, not modified by other loaders (like babel-loader)
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
};
