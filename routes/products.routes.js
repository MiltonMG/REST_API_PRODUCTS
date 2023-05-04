//IMPORTACIONES
const { Router } = require('express');
const { check } = require('express-validator');

//Controllers
const { productsGet, 
        productsPut, 
        productsDelete, 
        productsPost, 
        productsGetById} = require('../controllers/products.controller');

//middleware personalizado
const { validarCampos, 
        existeId, 
        existeProducto } = require('../middlewares/validar-campos');



//Enrutador
const router = Router();


//GET
router.get('/', productsGet )


//GET POR ID
router.get('/:id',[//middlewares para validar peticiones correctas
    check('id').custom(existeProducto),
    check('id', 'Ese no es un id valido').isNumeric(),
    validarCampos
], productsGetById)

//PUT
router.put('/:id',[//middlewares para validar peticiones correctas
    check('id').custom(existeProducto),
    check('id', 'Ese no es un id valido').isNumeric(),
    validarCampos
], productsPut)


//POST
router.post('/', [//middlewares para validar que los campos no esten vacios
    check('id', 'El campo id es requerido').not().isEmpty(),
    check('id').custom( existeId ),
    check('name', 'El campo name es requerido').not().isEmpty(),
    check('price', 'El campo price es requerido').not().isEmpty(),
    check('description', 'El campo description es requerido').not().isEmpty(),
    check('timestamps', 'El campo timestamps es requerido').not().isEmpty(),
    validarCampos
],productsPost)


//DELETE
router.delete('/:id',[//middlewares para validar peticiones correctas
    check('id').custom(existeProducto),
    check('id', 'Ese no es un id valido').isNumeric(),
    validarCampos
], productsDelete)


module.exports = router;

