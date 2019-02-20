import mongoose from 'mongoose'

const Schema = mongoose.Schema
const prodectModels = new Schema({
    name: String,
    id: Schema.ObjectId,
    sendTime: {  //发车时间
        type: Date,
        default: Date.now()
    },
    residueNum: {  //剩余人数
        type: Number,
        default: 4
    },
    destination: {  //终点
        type: String,
        default: '111'
    },
    startPoint: {  //起始点
        type: String,
        default: '222'
    },
    approach: {  //途径
        type: Array,
        default: ['123', '34', '55', '66']
    },
    fee: {  //费用
        type: Number,
        default: 15
    },
}, {collection: 'prodect'})
//根据发出地点搜索
prodectModels.statics.findByStartPoint = function (startPoint, cb) {
    return this.find({startPoint: new RegExp(startPoint, 'i')}, cb);
};
// //根据途径地点
// prodectModels.static.findByApproach = function (startPoint, cb) {
//     return this.find({approach: new RegExp(startPoint, 'i')}, cb);
// };

module.exports = mongoose.model('prodect', prodectModels)
