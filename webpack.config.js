module.exports = {
    watch: true,
    entry: './resources/js/app.js',
    output: {
      filename: './public/js/app.js'
    },
    resolve: {
      alias: {
        vue: './vue.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }, {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    }
  }