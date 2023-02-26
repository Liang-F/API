const express = require('express')
const userService = require('../services/user.service')
const router = express.Router()

router.get('/', async (req, res) => {
  let result = await userService.findByUserName(req.query.userName)
  res.send(result)
})

router.post('/addUser', async (req, res) => {
  userService.addUser(req.query.userName, req.query.passWord).then(result => {
    console.log('路由res', result)
    res.send(result)
  }).catch(err => {
    console.log('路由err', err)
    res.send(err)
  })
})

router.get('/deleteUser', async (req, res) => {
  console.log('删除用户')
  res.send({message: '删除用户'})
  // const userName = req.query.userName
  // console.log('参数', userName)
  // let result = await userService.findByUserName(userName)
  // console.log('结果', result)
  // res.send(result)
})
module.exports = router