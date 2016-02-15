module.exports = {
  entry:"./public/scripts/main.js",
  output: {
    path: './public/scripts',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  watch: true
};
