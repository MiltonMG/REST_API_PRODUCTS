
const { response, request } = require('express')
const Product = require('../models/product')


const productsGet = async(req = request, res = response) => {


    //Coleccion de promesas
    const [total, products] = await Promise.all([
        Product.countDocuments(),//Obteniendo el total de documentos
        Product.find()//Obteniendo todos los documentos
    ])
    
    //Mensaje de respuesta
    res.json({
        total_products: total,
        products
    });

}

const productsGetById = async(req = request, res = response) => {
    
    //Obteniendo id para realizar GET por id
    const { id } = req.params;

    //Obteniendo la informacion de la base de datos
    const product = await Product.findOne( {id} );

    //Mensaje de respuesta
    res.json({
        product
    });


}

const productsPut = async(req = request, res = response) => {
    
    //Obteniendo id para actualizar la bd
    const idParam = req.params.id;

    //Saque el todos los campos que no pueden ser cambiados, solo la data sera actualizada
    const { _id, id, ...data } = req.body; 

    //Actualizando producto en bd
    const product = await Product.findOneAndUpdate( {id:Number(idParam)},  data, {new: true});
    
    //Mensaje de respuesta
    res.json({
        msg: 'Producto actualizado correctamente',
        product
    });

}

const productsPost = async (req = request, res = response) => {

    //Obtenemos los datos enviados por el body
    const body = req.body;

    //Creamos el nuevo producto para guardar en la bd
    const product = new Product( body );

    //Guardamos en la base de datos
    await product.save();
    
    //Mensaje de respuesta
    res.json({
        msg: 'Producto guardado correctamente',
        product
    });

}


const productsDelete = async(req = request, res = response) => {
    
    //Obteniendo id de los parametros
    const { id } = req.params;

    //Borrando producto
    const product = await Product.findOneAndDelete( {id} );

    //Mensaje de respuesta
    res.json({
        msg: 'Producto eliminado correctamente',
        product
    });

}




module.exports = {
    productsGet,
    productsPut,
    productsPost,
    productsDelete,
    productsGetById
}