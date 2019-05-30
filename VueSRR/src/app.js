import Vue from "vue";
import App from "./App.vue";
import {initRouter} from "./router";
import {initStore} from "./store";

// import {sync} from "vuex-router-sync";

export function initVue(){
  const {router}=initRouter();
  const {store}=initStore();
  // sync(store,router);
  const app=new Vue({
    router,
    store,
    render:h=>h(App)
  });
  return {app,store,router,App};
  // return {app,store,App};
}