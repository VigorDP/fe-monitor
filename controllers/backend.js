var nodeMailService = require('../services/node-mail.js');

function errorReportHandler(req, res, next) {
	// 设置邮件内容
	var query = req.query,
		errorType = query.type,
		responseHtml = `你的程序出现异常，请及时修复:</br>异常时间:${query.time}</br>所属项目：${query.project}</br>页面地址：${query.pageUrl}</br>错误信息：${query.msg}</br>`;
	console.log('query', errorType);
	console.log('response', query.response);
	switch (errorType) {
		case 'JsError':
			break;
		case 'AjaxError':
			responseHtml += `错误接口：${query.ajaxUrl}</br>状态码：${query.status}</br>详细信息：${query.statusText}`;
			console.log('responseHtml', responseHtml);
			break;
		case 'ResourceError':
			responseHtml += `资源类型：${query.target}</br>资源路径：${query.resourceUrl}</br>`;
			break;
		default:
			next();
	}
	var mailOptions = {
		from: "FE-Monitor <1542963276@qq.com>", // 发件地址
		to: query.response || 'xuefengliu@sohu-inc.com', // 收件列表
		subject: errorType, // 标题
		html: responseHtml // html 内容
	}
	nodeMailService(mailOptions);
	next();
}

module.exports = {
	errorReportHandler: errorReportHandler
}