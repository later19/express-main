const express = require('express')
const router = express.Router()
const user_Handler = require('../router_handler/user')
const expressjoi = require('@escook/express-joi')
const {reg_login_schema}=require('../schema/userJoi')

console.log(user_Handler)
// 注册
router.post('/reguser',expressjoi(reg_login_schema), user_Handler.regUser)
// 登录
router.post('/login', user_Handler.login)


module.exports = router