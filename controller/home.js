'use strict'
const Home = require("../models/home");

class home {

    async getHomeList(req, res, next) {
        try {
            const categories = await Home.find({})
            res.send(categories);
        } catch (err) {
            console.log('查询失败');
        }
    }

    async setBannerList(req, res, next) {
        try {
            const categories = await Home.create(req.query)
            res.send(categories);
        } catch (err) {
            res.send('创建失败');
            next()
        }
    }
}

export default new home()
