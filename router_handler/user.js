const db = require('../db/index')
const bcryptjs = require('bcryptjs')



const findUname = 'SELECT * FROM users WHERE username=?';
const addUser = 'INSERT INTO users set ?';
    
    
exports.regUser = (req, res) => {
    const userinfo = req.body;
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不合法')
    // }
    db.query(findUname, userinfo.username, (err, resluts) => {
        if (err) {
            return res.cc(err)
        }
        if (resluts.length>0) {
            return res.cc('用户名已被占用')
        }
        let userobj = {
            username: userinfo.username,
            password:bcryptjs.hashSync(userinfo.password, 10)
        }
        db.query(addUser, userobj, (err, resluts) => {
            if (err) {
                return res.cc(err)
            }
            if(resluts.affectedRows == '1'){
                return res.cc('注册成功',200)
            }else{
                return res.cc('注册失败')
            }
        })

    })
}

exports.login = (req, res) => {
    res.send('login OK')
}
