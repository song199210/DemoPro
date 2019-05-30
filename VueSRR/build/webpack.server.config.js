const path=require("path");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports=merge(base,{
  target:"node",
  output: {
    path:path.resolve(__dirname,"../dist"),
    libraryTarget: 'commonjs2'
  },
  devtool: '#source-map',
  externals:[nodeExternals()], //排除node_modules
  entry:path.resolve(__dirname,"../src/entry-server.js"),
  plugins:[
    new VueSSRServerPlugin(),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"../index.ssr.html"),
      filename:"index.ssr.html",
      excludeChunks: ['main'] //排除服务器端打包后的文件
    })
  ]
});
