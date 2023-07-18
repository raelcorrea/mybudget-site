const path = require('path')

module.exports = {
  entry: './src/ui/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
