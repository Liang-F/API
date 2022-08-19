const express = require('express')
// 客户端传参了但是服务器没有收到参数的话，说明express版本中需要body-parser
const bodyParser = require('body-parser')
// 配置cors跨域：npm i cors@2.8.5 下载并导入配置cors中间件
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'sunshine'
})
connection.connect()

app.get('/user', function (req, res) {
  const userName = req.query.name
  console.log('userName', userName)
  // sql语句
  let sql = `SELECT id, name, password FROM user WHERE name = '${userName}'`
  connection.query(sql, (err, rows, fields) => {
    if (err) {
      res.send({
        status: 0,
        data: rows,
        message: `请求失败:${err}`
      })
    } else {
      // res.json({ 'status': 1, 'msg': '请求成功', 'data': rows })
      res.send({
        status: 1,
        data: rows,
        message: '请求成功'
      })
    }
  })
})

app.listen(3000, () => console.log('server on http://localhost:3000'))