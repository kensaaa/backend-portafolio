// host + api/auth

const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()

const { createUser, loginUser, revalidateToken } = require('../controllers/auth')
const { validateFields } = require('../middlewares/validar-campos')
const { validateJWT } = require('../middlewares/validarJWT')

router.post(
    '/', 
    [
        check('email','el email es obligatorio').isEmail(),
        check('password','el password es obliatorio').isLength({min:6}),
        validateFields
    ],
    loginUser 
)

router.post(
    '/new', 
    [
        check('name','el nombre es obligatorio').not().isEmpty(),
        check('email','el email es obligatorio').isEmail(),
        check('password','el password es obligatorio').isLength({min:6}),
        validateFields
    ],
    createUser
)

router.get( 
    '/renew',
    validateJWT,
    revalidateToken 
)


module.exports = router

