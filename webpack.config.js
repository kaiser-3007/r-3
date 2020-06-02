const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const autoprefixer = require("autoprefixer");
// const browserPath = path.resolve(__dirname, "../browser");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /(\.scss|\.css)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: process.env.NODE_ENV === "development" ? "[path][name]__[local]" : "[hash:base64]",
            },
            importLoaders: 1
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer()]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }],
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
};