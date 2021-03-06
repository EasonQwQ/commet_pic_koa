const Koa = require('koa');

const app = new Koa();

const router = require('koa-router')();
const body = require('koa-bodyparser');
const cors = require('koa2-cors');
const jwtKoa = require('koa-jwt');
const fs = require('fs');
const https = require('https');
const enforceHttps = require('koa-sslify');
const views = require('koa-views');
const path = require('path');
const secret = require('./config/secret.json');
const vt = require('./middleware/verifyToken');
const user = require('./router/user');
const login = require('./router/login');
const pic = require('./router/pic');
const url = require('./router/url');
const resume = require('./router/resume');
const common = require('./router/common');

const options = {
  key: fs.readFileSync('./ssl/2_www.bbtjym.com.key'),
  cert: fs.readFileSync('./ssl/1_www.bbtjym.com_bundle.crt'),
};

app.use(body());
app.use(cors());
router.use('/login', login);
app.use(
  jwtKoa({ secret: secret.sign }).unless({
    path: [/^\/login\/*/, /^\/reginster/, /^\/url\/*/, /^\/resume\/*/],
  }),
);
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message,
    };
    console.log('err', err);
    // 手动释放error事件
    ctx.app.emit('error', err, ctx);
  }
});
app.on('error', (err, ctx) => { // 捕获异常记录错误日志
  console.log(new Date(), ':', err);
});
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs',
}));
app.use(vt.jwtToken);
router.use('/url', url);
router.use('/user', user);
router.use('/picture', pic);
router.use('/resume', resume);
router.use('/common', common);
app.use(router.routes()).use(router.allowedMethods());
https.createServer(options, app.callback()).listen(8100); // 正式库
// https.createServer(options, app.callback()).listen(8111); //  测eeeea试库
