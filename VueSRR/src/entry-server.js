import {initVue} from "./app";

export default context => {
  const { app } = initVue();
  return new Promise((resolve, reject) => {
    const { app, store, router, App } = initVue();
    let components = App.components;
    // let asyncDataPromiseFns = [];
  
    Object.values(components).forEach(component => {
      if (component.asyncData) {
        component.asyncData({ store });
        // asyncDataPromiseFns.push();
      }
    });

    // Promise.all(asyncDataPromiseFns).then((result) => {
    //   context.state = store.state;
    // }, reject).catch((err)=>{
    //     console.log("error~~~~~~~~~~~~~");
    //     console.log(err);
    // });
    resolve(app);
  });
}
  
