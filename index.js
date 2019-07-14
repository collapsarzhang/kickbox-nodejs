const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000
const apiKey = 'test_268aa7aa584bbc7191a5bbd10a8d8fb9bea6ac5592f1e9456692eda73f082ccf';

router.get('/', async (ctx, next) => {
 const email = ctx.request.email;
 const url = `https://api.kickbox.com/v2/verify?email=${email}&apikey=${apiKey}`;
 return fetch(url).then(res => {
  console.log(res.body);
  ctx.body = res.body;
 });
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
