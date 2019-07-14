const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 5000
const kickbox = require('kickbox').client('test_268aa7aa584bbc7191a5bbd10a8d8fb9bea6ac5592f1e9456692eda73f082ccf').kickbox();

kickbox.verify("test@example.com", function (err, response) {
  // Let's see some results
  console.log(response.body);
});

router.get('/', (ctx, next) => {
 const email = ctx.request.email;
 kickbox.verify(email, (err, res) => {
  console.log(res.body);
  ctx.body = res.body;
 });
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
