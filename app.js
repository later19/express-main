const express = require('express')
// 配置跨域中间件
const cors = require('cors')
const app = express()
const useRouter = require('./router/user')
const Joi = require('joi')


app.use((req, res, next) => {
    res.cc = (err,status=1,data={}) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
            data
        })
    }
    next()
})

app.use(cors())

// 解析表单数据中间件
app.use(express.urlencoded({extended:false}))


app.use('/api',useRouter)


// 错误级别的中间件
app.use((err, req, res) =>{
    if (err instanceof Joi.ValidationError) return res.cc(err)
    // 未知的错误
    res.cc(err)
})


app.listen('3000', () => {
    console.log('servering at 3000')
})