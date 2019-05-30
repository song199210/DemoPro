import {initVue} from "./app";

export default context => {
  const { app } = initVue();
  return new Promise((resolve, reject) => {
    const { app, store, router, App } = initVue();
    let components = App.components;
    let asyncDataPromiseFns = [];
  
    Object.values(components).forEach(component => {
      if (component.asyncData) {
        asyncDataPromiseFns.push(component.asyncData({ store }));
      }
    });

    Promise.all(asyncDataPromiseFns).then((result) => {
      context.state = store.state;
      resolve(app);
    }, reject).catch((err)=>{
        console.log("error~~~~~~~~~~~~~");
        console.log(err);
    });
  });
}
  
