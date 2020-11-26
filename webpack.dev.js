const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = merge(common, {
  target: 'web', 
  mode: 'development', 
  output: {
    path: path.resolve(__dirname + '/build'), 
    filename: 'bundle.js'
  },
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  devServer: {
    contentBase: './', 
    port: 5000
  }
})

console.log(module.exports)