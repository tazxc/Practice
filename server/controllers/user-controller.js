const userService = require('../service/user-service')
const Basket = require('../models/basket')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class UserController{

    async registration(req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Пароль должен быть не более 16 символов и не менее 8. Обязательны символы число, заглавные и строчные символы.', errors.array()))
            }
            const {email, password} = req.body
            const userData = await userService.registraion(email, password)
            const basket = await Basket.create({userId: userData.user.id})
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 17 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch(e){
            next(e)
        }
    }

    async login(req, res, next){
        try{
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 17 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch(e){
            next(e)
        }
    }

    async logout(req, res, next){
        try{
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }catch(e){
            next(e)
        }
    }

    async activate(req, res, next){
        try{
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }catch(e){
            next(e)
        }
    }

    async refresh(req, res, next){
        try{
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 17 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch(e){
            next(e)
        }
    }

    async users(req, res, next){
        try{
            res.json(['123'])
        }catch(e){
            next(e)
        }
    }

    

}


module.exports = new UserController()