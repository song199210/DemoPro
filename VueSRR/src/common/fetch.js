export const httpAjax=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("测试SSR中Ajax返回数据!");
    },2000);
  });
}