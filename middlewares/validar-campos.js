const { validationResult } = require("express-validator");
const Product = require("../models/product");

//Middleware para retornar todos los errores encontrados
const validarCampos = ( req, res, next ) => {
    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
}


//Validamos que el id no exista ya en la bd
const existeId = async( id ) => {
    const exite = await Product.findOne({id})
    if ( exite ) {
        throw new Error('El id ingresado ya existe')
    }
}


//Existe producto por id
const existeProducto = async (id) => {

    if (Number(id)) {//Validamos que el id sea un numero, sino lo es otro middleware alertara.
        const exite = await Product.findOne({id})
        if ( !exite ) {
            throw new Error(`El id ${id} no existe`)
        }
    }

}

module.exports = {
    validarCampos,
    existeId,
    existeProducto

}