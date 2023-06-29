const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = new Router()
const {body} = require('express-validator')

const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const authMiddleWare = require('../middlewares/authMiddleWare')





router.post('/registration',
    body('email').isEmail(),
    body('password', "Пароль должен быть минимум 8 символов и максимум 16").isLength({min: 8, max: 16}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', userController.users)

router.use('/type', typeRouter)
router.use('/product', productRouter)


module.exports = router