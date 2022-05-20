const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tileSchema = new Schema({
    name: {
        type: String,
        required: true    //обязательность
    },
    content: {
        type: String,
        required: true
    },
    author: {         //картинка автора
        type: String,
        required: true
    },
    user: {               //кто создает плитку
        ref: 'users'
    }
})

module.exports = mongoose.model('tiles', tileSchema)