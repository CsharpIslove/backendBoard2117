const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name: {
        type: String,
        required: true    //обязательность
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
})

module.exports = mongoose.model('Admin', adminSchema)