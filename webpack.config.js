const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-react-jsx", "transform-es2015-modules-commonjs"],
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-maps',
};