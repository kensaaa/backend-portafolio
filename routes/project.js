// host + api/project


const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validar-campos')
const { getProjects,createProject,updateProject,deleteProject } = require('../controllers/project')
const { validateJWT } = require('../middlewares/validarJWT')

const router = Router()

router.use( validateJWT )


router.get(
    '/',
    getProjects
)

router.post(
    '/',  
    [
        check('name','el nombre del proyecto es obligatorio').not().isEmpty(),
        check('description','la descripcion del proyecto es obligatorio').not().isEmpty(),
        check('technology','los tecnologias utilizadas es obligatorio').not().isEmpty(),
        check('url','la url de la foto del proyecto es obligatorio').not().isEmpty(),
        validateFields
    ],
    createProject
)

router.put(
    '/:id',
    updateProject
)

router.delete(
    '/:id',
    deleteProject
)


module.exports = router
