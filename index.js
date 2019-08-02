// http://www.expressjs.com.cn/4x/api.html
var express = require('express'),
  cookieParser = require('cookie-parser');
var app = express();

//设置端口
var port = process.env.PORT || 3000;
app.set('port', port);

//解析cookie
app.use(cookieParser());

require('./routes/backend')(app);

app.listen(3001, () => console.log('listen 3001'))