const merge=require("merge");
const base=require("./webpack.base.conf");

const dev_config=merge(base,{
  devServer:{
    host:"localhost",
    port: 8091,
    proxy: {}
  }
});
module.exports=dev_config;