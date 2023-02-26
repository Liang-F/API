const { json } = require('body-parser')
const connection = require('./connection')
const { errResult, successResult } = require('./msg')

class UserService {
  findByUserName(userName) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT id, userName, password FROM user WHERE userName = '${userName}'`
      const result = connection.query(sql, (err, rows, fields) => {
        if (err) {
          reject(errResult({ message: err })) 
        } else {
          resolve(successResult({ data: rows }))
        }
      })
    })
  }
  addUser(userName, passWord) {
    return new Promise((resolve, reject) => {
      this.findByUserName(userName).then(res => {
        if (JSON.parse(JSON.stringify(res)).data.length > 0) {
          resolve(errResult({ message: '用户名已存在' }))
        } else {
          const sql = `insert into user(userName, passWord) values('${userName}', '${passWord}')`
          connection.query(sql, (err, rows, fields) => {
            if (err) {
              reject(errResult({ message: err }))
            } else {
              resolve(successResult({ data: null, message: '新建成功' }))
            }
          })
        }
      }).catch(err => reject(errResult({ message: err })))
    })
  }
  // deleteUser(id) {
  //   return new Promise((resolve, reject) => {
  //     const sql = `delete from user where id = '${id}'`
  //     connection.query(sal, (err, rows, fields) => {
  //       if (err) {

  //       }
  //     })
  //   })
  // }
}

module.exports = new UserService()