// host + api/email

const { Router } =  require('express')
const { check } = require('express-validator')
const {sendEmail} = require('../helpers/sendEmail')
const router = Router()

const { validateFields } = require('../middlewares/validar-campos')
const { validateJWT } = require('../middlewares/validarJWT')

router.use( validateJWT )

const sendEmailToMe = async(req, res) => {


    try {
        await sendEmail(req.body)    

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok:false,
            msg:'hubo un problema al enviar el correo'
        })
    }
    
    res.json({
        ok:true,
        status: 'mensaje enviado correctamente'
    })


}

router.post(
    '/', 
    [
        check('name','el nombre es obligatior').not().isEmpty(),
        check('number','el numero es obligatorio').not().isEmpty(),
        check('email','el numero es obligatorio').isEmail(),
        check('message','el mensaje  es obligatorio').not().isEmpty(),
        validateFields
    ],
    sendEmailToMe
)



module.exports = router
