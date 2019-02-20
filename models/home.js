import mongoose from 'mongoose'

const Schema = mongoose.Schema
const home = new Schema({
    banner: [
        {
            url: String,
        }
    ],
}, {collection: 'home'})
module.exports = mongoose.model('home', home)
