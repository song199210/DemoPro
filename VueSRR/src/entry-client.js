import {initVue} from "./app";

const {app,store,router}=initVue();

router.onReady(()=>{
  app.$mount("#app");
});