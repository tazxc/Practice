const jwt = require('jsonwebtoken')
const tokenService = require('../service/token-service')


module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const authorizationHeader = req.headers.authorization
            if (!authorizationHeader) {
                return res.status(401).json({ message: "Не авторизован" })
            }
            const accessToken = authorizationHeader.split(' ')[1]
            if(!accessToken){
                return res.status(401).json({ message: "Не авторизован" })
            }
            const userData = tokenService.validateAccessToken(accessToken)
            if(!userData){
                return res.status(401).json({ message: "Не авторизован" })
            }
            
            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY)
            if(decoded.role !== role){
                return res.status(403).json({ message: "Нет доступа" })
            }
            req.user = decoded
            next()
        } catch (e) {
            console.log(e)
        }
    }

}

