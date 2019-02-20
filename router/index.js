import express from 'express';

const router = express.Router();
const user = require('./user')
const home = require('./home')
const product = require('./product')

router.use('/', home, user, product)


module.exports = router;
