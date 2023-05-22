const { Schema, model } = require('mongoose')


const ProductInfoSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
    info: [
        {
            title: { type: String, required: true },
            description: { type: String, required: true }
        }
    ]

})

module.exports = model('ProductInfo', ProductInfoSchema)