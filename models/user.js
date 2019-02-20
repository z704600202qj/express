import mongoose from 'mongoose'

const Schema = mongoose.Schema
const UserModel = new Schema({
    pwd: String,
    account: {
        type: String,
        required: true, // 数据的校验，添加require，表明该字段是必须的
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
}, {collection: 'user'})
module.exports = mongoose.model('user', UserModel)
