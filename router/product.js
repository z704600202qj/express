//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
import product from '../controller/product'
// 查询所有英雄信息路由
router.get("/product", product.fetch);
// 通过查询发车地点查询
router.get("/product/start/:start", product.findByStart);
// 通过查询发车途径查询
router.get("/product/approach/:approach", product.findByApproach);
// 添加一个信息
router.post("/product", product.create);
//更新一条信息数据
router.put("/product/:id", product.update);
// 通过ObjectId查询单个信息
router.get("/product/:id", product.find);
//删除一条信息
router.delete("/product/:id", product.delete);
module.exports = router;

