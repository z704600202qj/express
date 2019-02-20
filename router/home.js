import express from 'express'

const router = express.Router()
import home from '../controller/home'

router.get("/home", home.getHomeList)
router.post("/banner", home.setBannerList)
module.exports = router;
