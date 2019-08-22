import {LOAD_STATE} from "./state";
import {LOAD_ACTION_START,LOAD_ACTION_SUCCESS,LOAD_ACTION_ERROR} from "./actions";

export function LoadReducers(state=LOAD_STATE,action){
  switch(action['type']){
    case LOAD_ACTION_START: //为开始请求
      return Object.assign({},state,{show:true});
    case LOAD_ACTION_SUCCESS: //请求结束——SUCCESS
      return Object.assign({},state,{show:false,datas:action['payload']['datas']});
    case LOAD_ACTION_ERROR: //请求结束———ERROR
        return Object.assign({},state,{show:false,msg:action['payload']['msg']});
    default:
      return state;
  }
}