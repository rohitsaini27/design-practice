const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formschema = new Schema({
    name: {type: String, required: true},
    number: {type: String, required: true},
    area: {type: String, required: true},
    city: {type: String, required: true},
    description: {type: String},
}, {timestamps: true})

const FormData = mongoose.model('FormData', formschema)
module.exports = FormData