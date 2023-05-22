const Type = require('../models/type')
const ApiError = require('../exceptions/api-error')

class TypeController{
    async create(req, res){
        const{name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const types = await Type.find()
        return res.json(types)
    }
}

module.exports = new TypeController()