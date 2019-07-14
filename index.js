const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require('koa-cors');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000
const apiKey = 'live_c4cf0b8b2a095663e3b1569bc41a595ea121161e12133ba707651d163c05a240';

router.get('/', (ctx, next) => {
 const email = ctx.request.query.email;
 console.log(email);
 const url = `https://api.kickbox.com/v2/verify?email=${email}&apikey=${apiKey}`;
 return fetch(url).then(res => res.json()).then(json => {
  console.log(json);
  ctx.body = json;
 });
});
app.use(cors({origin: '*'}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
