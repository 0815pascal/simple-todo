const path = require('path')
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/, 
    loader: 'babel-loader'
  }
]

module.exports = {
  target: 'web', 
  entry: './src/index.tsx',
  module: {rules}, 
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  devServer: {
    contentBase: './', 
    port: 5000
  }
}