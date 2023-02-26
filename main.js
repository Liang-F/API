const express = require('express')
// 客户端传参了但是服务器没有收到参数的话，说明express版本中需要body-parser
const bodyParser = require('body-parser')
// 配置cors跨域：npm i cors@2.8.5 下载并导入配置cors中间件
const cors = require('cors')
// module
const user = require('./router/user')

const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use('/user', user)

app.use("/liang", express.static(__dirname + "/dist"));

app.get("/liang/\*", function (_, res) {
  res.sendFile(__dirname + "/dist/index.html");
})

var server = app.listen(8088, function () {
  var port = server.address().port;
  console.log('localhost:' + port);
})

// app.listen(3000, () => console.log('server on http://localhost:3000'))