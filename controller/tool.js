const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

class toolController {
  static async sendMail(ctx) {
    console.log(ctx.request.body);
    const { mobile, inputValue, currentBtn } = ctx.request.body;
    const transporter = nodemailer.createTransport(
      smtpTransport({
        host: 'smtp.163.com', // qq邮箱主机
        secure: true, // 使用 SSL
        secureConnection: true, // 使用 SSL
        port: 465, // SMTP 端口
        auth: {
          user: 'bbtjym@163.com', // 账号   你自定义的域名邮箱账号
          pass: 'tangmu1234', // 密码   你自己开启SMPT获取的密码
        },
      }),
    );

    const mailOptions = {
      from: 'bbtjym@163.com', // sender address
      to: '750225883@qq.com', // list of receivers
      subject: '反馈', // Subject line
      // 发送text或者html格式
      // text: 'Hello world?', // plain text body
      html: `<b>手机号：${mobile}/n 问题反馈：${inputValue} </b>`, // html body
    };
    const mailOptions1 = {
      from: 'bbtjym@163.com', // sender address
      to: 'yaoqiang@coffeehall.com', // list of receivers
      subject: '反馈', // Subject line
      // 发送text或者html格式
      // text: 'Hello world?', // plain text body
      html: `<b>手机号：${mobile} 问题反馈：${inputValue} </b>`, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    });
    ctx.body = 'ok';
  }
}
module.exports = toolController;
