const path=require("path");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const config=merge(base,{
  entry:{
    client:path.resolve(__dirname,"../src/entry-client.js")
  },
  output:{
    path:path.resolve(__dirname,"../dist")
  },
  plugins:[
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"../index.html"),
      filename:"index.client.html"
    })
  ]
});
module.exports=config;