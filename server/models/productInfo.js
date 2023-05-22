const {Schema, model} = require('mongoose')

const ProductInfoSchema = new Schema({
    product_id:{type: Schema.Types.ObjectId, ref: 'product'},
    title: {type: String, required: true}
})

module.exports = model('ProductInfo', ProductInfoSchema)