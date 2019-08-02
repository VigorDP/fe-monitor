// http://www.expressjs.com.cn/4x/api.html
var express = require('express'),
  cookieParser = require('cookie-parser');
var app = express();

//解析cookie
app.use(cookieParser());

require('./routes/backend')(app);

app.listen(process.env.PORT || 3000, () => console.log('listen 3001'))