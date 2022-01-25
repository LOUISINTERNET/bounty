const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bounty.js',
    path: './lib/',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'bounty'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
