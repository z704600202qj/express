import express from 'express'
import user from "../controller/user";

const router = express.Router()
router.post("/user/login", user.login)
router.post("/user/register", user.register)

module.exports = router;
