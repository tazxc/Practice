const userService = require('../service/user-service')

class UserController{

    async registration(req, res, next){
        try{
            const {email, password} = req.body
            const userData = await userService.registraion(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 17 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch(e){
            console.log(e)
        }
    }

    async login(req, res, next){
        try{

        }catch(e){
            
        }
    }

    async logout(req, res, next){
        try{

        }catch(e){
            
        }
    }

    async activate(req, res, next){
        try{
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }catch(e){
            console.log(e)
        }
    }

    async refresh(req, res, next){
        try{

        }catch(e){
            
        }
    }

    async users(req, res, next){
        try{
            res.json(['123'])
        }catch(e){

        }
    }

}


module.exports = new UserController()