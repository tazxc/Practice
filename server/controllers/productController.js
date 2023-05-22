const uuid = require('uuid')
const path = require('path')

class ProductController{
    async create(req, res){
        const {name, price, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, ))
    }

    async getAll(req, res){
        
    }

    async getOne(req, res){
        
    }
}

module.exports = new ProductController()