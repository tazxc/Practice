const uuid = require('uuid')
const path = require('path')
const product = require('../models/Product')
const productInfo = require('../models/productInfo')
const ApiError = require('../exceptions/api-error')

class ProductController{
    async create(req, res, next){
        try{
            const {name, price, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const Product = await product.create({name, price, typeId, info, img: fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    productInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: Product.id
                    }) 

                );
            }

            

            return res.json(Product)
            
        }catch(e){
            next(ApiError.BadRequest(e.message))
        }
        
    }

    async getAll(req, res){
        const {typeId} = req.query
        let products;
        if(!typeId){
            products = await product.find()
        }

        if(typeId){
            products = await product.find({typeId})
        }

        return res.json(products)
    }

    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findOne({id})

        return res.json(product)
    }
}

module.exports = new ProductController()