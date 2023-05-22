const {Schema, model} = require('mongoose')

const BasketProductSchema= new Schema({
    userId:{type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('BasketProduct', BasketProductSchema)