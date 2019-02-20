'use strict'
import sha1 from 'sha1'

const user = require("../models/user");

class userController {
    async login(req, res, next) {
        try {
            let userLogin = new user({
                account: req.query.account,
                pwd: sha1(req.query.pwd)
            })
            user.findOne({
                account: userLogin.account
            }).then(user => {
                if (!user) {
                    res.json({
                        success: false,
                        message: "账号不存在"
                    })
                } else if (userLogin.pwd === user.pwd) {
                    res.cookie('cookie', '232323')
                    res.json({
                        success: true,
                        message: "登录成功",
                        // session: req.session,
                        account: user.account,
                    })
                }
            })
        } catch (err) {
            res.json(err)
        }
    }

    async register(req, res, next) {
        try {
            let userRegister = new user({
                account: req.query.account,
                pwd: sha1(req.query.pwd) // 将密码加密
            })
            user.findOne({account: req.query.account})
                .then((user) => {
                    if (user) {
                        res.send({
                            errorMsg: '该用户已经存在'
                        });
                    } else {
                        userRegister.save((err, user) => {
                            if (err) {
                                res.json(err)
                            } else {
                                res.json(user)
                            }
                        })

                    }
                })
                .catch(err => res.json(err))
        } catch (err) {
            res.json(err)
        }
    }
}

export default new userController()
