import {HomeInfoState} from "./state";

export const HInfoReducer=(state=HomeInfoState,data)=>{
  let new_arr=[];
  new_arr=[].concat(HomeInfoState);
  switch(data.type){
    case "ADD":
      new_arr.push(data.payload);
      return new_arr;
    case "UPDATE":
      var obj=data.payload;
      for(var i=0;i<new_arr.length;i++){
        if(new_arr[i]['id'] == obj['id']){
          new_arr[i]=obj;
          break;
        }
      }
      return new_arr;
    case "DELETE":
      var obj=data.payload;
      for(var i=0;i<new_arr.length;i++){
        if(new_arr[i]['id'] == obj['id']){
          new_arr.splice(i,1);
          break;
        }
      }
      break;
    default:
      return new_arr;
  }
}