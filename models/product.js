const { Schema, model } = require("mongoose")


//Esquema sobre como se guardara el producto en la base de datos.

/**
 * NOTA: Todos los campos que en la prueba se indicaban son requeridos
 */
const ProductSchema = Schema({
    
    id: {
        type: Number,
        require: [true, 'El id es obligatorio'],
        unique: true
    },
    name: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    price: {
        type: Number,
        require: [true, 'El precio es obligatorio']
    },
    description: {
        type: String,
        require: [true, 'la descripcion es obligatorio']
    },

    timestamps: {
        type: Date,
        require: [true, 'El timestamps es obligatorio']
    }

});

module.exports = model( 'Product', ProductSchema );