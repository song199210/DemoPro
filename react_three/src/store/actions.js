/**关于Load组件的Actin **/
export const LOAD_ACTION_START = "LOAD_ACTION_START";
export const LOAD_ACTION_SUCCESS = "LOAD_ACTION_SUCCESS";
export const LOAD_ACTION_ERROR = "LOAD_ACTION_ERROR";

export const LOAD_ACTION_FUNS = function(type,payload){
  return {
    type,
    payload
  };
}