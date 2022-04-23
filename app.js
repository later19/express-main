const express = require('express')
// 配置跨域中间件
const cors = require('cors')
const app = express()

app.use(cors())

// 解析表单数据中间件
app.use(express.urlencoded({extended:false}))







app.listen('3000', () => {
    console.log('servering at 3000')
})