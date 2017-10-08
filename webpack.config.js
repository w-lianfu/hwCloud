let webpack = require('webpack')
let path = require('path')
let devServer = require('webpack-dev-server')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

let config = {
  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    // publicPublic: path.join(__dirname, '/public'),
    compress: true,
    hot: true,
    port: 9000,
    inline: true,
    allowedHosts: [
      'cloud.com'
    ]
  }
}

module.exports = config
