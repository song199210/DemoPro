const path=require("path");
const env=require("../config/env");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
  mode:"development",
  output:{
    path:path.resolve(__dirname,"../dist"),
    filename:"[name].bundle.js"
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:'babel-loader'
      },{
        test:/\.vue$/,
        use:'vue-loader'
      },{
        test:/\.(jpg|jpeg|png|gif|svg)$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 10000    // 10Kb
          }
        }
      },{
        test:/\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:path.resolve(__dirname,"../dist")
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:"[name].client.css",
      chunkFilename:"[id].client.css"
    })
  ]
}