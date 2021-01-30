const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
      new CleanWebpackPlugin(),  
      new WebpackManifestPlugin(), 
  ],
  output: {
    publicPath: '',
    filename: '[name].[contenthash].js', 
    path: path.resolve(__dirname, 'dist'),
  },
};