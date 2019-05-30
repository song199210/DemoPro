const path=require("path");
const VueLoaderPlugin =require("vue-loader/lib/plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");
// const ExtractTextPlugin=require("extract-text-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports={
  entry:"./src/entry-client.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:"babel-loader"
      },{
        test:/\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader
          },
          // "vue-style-loader", 服务器端
          "css-loader",
          "postcss-loader"
        ]
      },{
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000    // 10Kb
          }
        }
      },{
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:"./index.html"
    }),
    new MiniCssExtractPlugin({
      filename:"[name].css",
      chunkFilename:"[id].css"
    })
  ]
}