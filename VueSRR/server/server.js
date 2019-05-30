const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const appOne = new Koa();
const appTwo = new Koa();
const routerOne = new Router();
const routerTwo = new Router();


const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
});

// 后端Server
routerOne.get('/index', async (ctx, next) => {
  try {
    let html = await new Promise((resolve, reject) => {
      renderer.renderToString((err, html) => {
        if (err) {
          reject(err);
        } else {
          resolve(html);
        }
      });
    });
    ctx.type = 'html';
    ctx.status = 200;
    ctx.body = html;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = '服务器内部错误';
  }
});

appOne.use(serve(path.resolve(__dirname, '../dist')));

appOne.use(routerOne.routes())
    .use(routerOne.allowedMethods()); //处理跨域问题

appOne.listen(3001, () => {
  console.log('服务器端渲染地址： http://localhost:3001');
});


// 前端Server
routerTwo.get('/index', (ctx, next) => {
  let html = fs.readFileSync(path.resolve(__dirname, '../dist/index.client.html'), 'utf-8');
  ctx.type = 'html';
  ctx.status = 200;
  ctx.body = html;
});

appTwo.use(serve(path.resolve(__dirname, '../dist')));

appTwo.use(routerTwo.routes())
  .use(routerTwo.allowedMethods()); //处理跨域问题

appTwo.listen(3002, () => {
  console.log('浏览器端渲染地址： http://localhost:3002');
});