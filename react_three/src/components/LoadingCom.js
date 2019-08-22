import React from "react";

const LoadingCom = (props)=>{
  const {show}=props;
  if(!show){
    return null;
  }
  return (
    <div>
      正在加载中...
    </div>
  );
}

export default LoadingCom;