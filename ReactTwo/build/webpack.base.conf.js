const path=require("path");
const merge=require("merge");
const dev=require("./webpack.base.conf");
const htmlWebpackPlugin=require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports={
  mode:"development",
  entry:{
    app:path.resolve(__dirname,"../src/index.js")
  },
  output:{
    filename:"[name]-[id].js",
    path:path.resolve(__dirname,"../dist")
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader:"babel-loader",
          options:{
            "presets": ["@babel/env","@babel/react"],
            "plugins": ["@babel/plugin-transform-runtime"]
          }
        }
      },{
        test:/\.(css|scss|less)$/,
        exclude: "/node_modules/",
        use:[
          {
            loader: miniCssExtractPlugin.loader,
            options:{
              publicPath:path.resolve(__dirname,"../dist")
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      },{
        test:/\.(jpg|jpeg|png|gif|svg)$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 10000    // 10Kb
          }
        }
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.resolve(__dirname,"../src/index.html"),
      filename:"index.html"
    }),
    new miniCssExtractPlugin({
      filename:"[name].[id].css",
      chunkFilename:"[id].chunk.css"
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }
    })
  ],
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
};