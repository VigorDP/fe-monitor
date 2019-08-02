var nodemailer = require("nodemailer"),
	config = require('../config.js');

module.exports = function(options) {
	// 开启一个 SMTP 连接池
	var smtpTransport = nodemailer.createTransport(config.NODEMAILER);

	// 发送邮件
	smtpTransport.sendMail(options, function(error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log("success");
		}
		smtpTransport.close(); // 如果没用，关闭连接池
	});
}