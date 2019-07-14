const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 5000

router.get('/', (ctx, next) => {
 ctx.body = 'Hello World!';
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
