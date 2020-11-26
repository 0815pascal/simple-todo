const path = require('path')
const common = require('./webpack.common')
const {merge} = require('webpack-merge')
const contentHash = require('content-hash')
module.exports = merge(common,{
  target: 'web', 
  mode: 'production', 
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'bundle.[contentHash].js'
  }
})