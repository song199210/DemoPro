import Vue from "vue";
import Vuex from "vuex";
import {httpAjax} from "./common/fetch";

Vue.use(Vuex);
const GET_HTTP="getHttp";

export function initStore(){
  const store=new Vuex.Store({
    state:{
      msg:""
    },
    mutations:{
      [GET_HTTP](state,data){
        state.msg=data;
      }
    },
    actions:{
      testHttp:({commit})=>{
        return httpAjax().then((res)=>{
          commit(GET_HTTP,res);
        });
      }
    }
  });
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    console.log('window.__INITIAL_STATE__', window.__INITIAL_STATE__);
    store.replaceState(window.__INITIAL_STATE__);
  } else {
    console.log('no browser');
  }
  return {store};
}