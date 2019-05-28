import {message} from "antd";

//封装HTTP fetch请求
export const HttpUtil=(urlStr,sendData,type)=>{
  const urlApi="http://localhost:8000/TestSShPro";
  return fetch(`${urlApi}/${urlStr}`,{
    method: type?type:'post',
    body: JSON.stringify(sendData),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }).then((response)=>{
    if(response.status == 200){
      return response.json();
    }
  });
}
//封装请求后消息提示message
export const HttpMsg=(data)=>{
  if(!data) throw new Error("data数据错误");

  if(data.flag == "success"){
    message.success(data.msg);
    return true;
  }else{
    message.error(data.msg);
    return false;
  }
}
//单个格式化时间去.0
export const FormatDTime=(datetime)=>{
  if(typeof datetime != "string"){
    return false;
  }
  if(datetime.indexOf(".0") != -1){
    return datetime.substring(0,datetime.indexOf(".0"));
  }else{
    return datetime;
  }
}
//整个对象格式化时间去.0
export const FormatAllDTime=(obj,...args)=>{
  if(args.length != 0){
    args.forEach((key)=>{
      obj[key]=FormatDTime(obj[key]);
    })
  }else{
    throw new Error("没有可更改的key键值对");
  }
}
//处理为Null的数据，如果为Null则为""
export const NotNull=(obj)=>{
  if(obj){
    const keys=Object.keys(obj);
    if(keys.length != 0){
      keys.forEach((key)=>{
        if(obj[key] == null){
          obj[key]="";
        }
      })
    }
  }
}
//初始化对象
export const InitData=(obj,...args)=>{
  if(obj){
    const keys=Object.keys(obj);
    var argsObj={};
    args.forEach((arg)=>{
      argsObj[arg]="";
    });
    if(keys.length != 0){
      keys.forEach((key)=>{
        if(!argsObj.hasOwnProperty(key)){
          obj[key]="";
        }
      })
    }
  }
}