import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function initRouter(){
  const router=new Router({
    mode: 'history',
    routes: [
      {path:"/compt1",component:()=>import("./components/Compt1.vue")},
      {path:"/compt2",component:()=>import("./components/Compt2.vue")},
      {path:"/compt3",component:()=>import("./components/Compt3.vue")}
    ]
  });
  return {router};
}