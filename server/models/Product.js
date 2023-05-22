const {Schema, model} = require('mongoose')
const productInfo = require('./productInfo')

const ProductSchema = new Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    img:{type: String, required: true},
    typeId: {type: String, required: true},
    productInfo: {type: String, required: true}
})

module.exports = model('Product', ProductSchema)