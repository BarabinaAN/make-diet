var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

  const { mode = 'dev' } = env
  const isProd = mode === 'prod'
  const isDev = mode === 'dev'

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
    ]
  }

  const getPlugins = () => {
    let plugins = [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name]-[hash:7].css'
        })
      )
    }
    return plugins
  }

  return {
    output: {
      publicPath: '/',
    },
    mode: isProd ? 'production' : isDev && "development",
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(jpg|svg|png|jpeg|ico)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outpath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }]
        },
        {
          test: /\.css/,
          use: getStyleLoaders()
        },
        {
          test: /\.s[ca]ss/,
          use: [...getStyleLoaders(), 'sass-loader']
        }
      ]
    },
    plugins: getPlugins(),
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      open: true
    }
  }
}