const { Schema, model } = require("mongoose")


//Esquema sobre como se guardara el producto en la base de datos.

/**
 * NOTA: Todos los campos que en la prueba se indicaban son requeridos, excepto timestamp
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
        default: new Date()
    },
    product_category: {
        type: String,
        default: 'Empty field'
    },
    product_image: {
        type: String,
        default: 'Empty field'
    },
    provider: {
        type: String,
        default: 'Empty field'
    }
});

/*
sobrescribimos el metodos toJSON para quitar ciertos datos que no queremos enviar al
realizar peticion al endpoint, esto se envia donde se llama res.json(), esto esta en los controladores de las rutas
*/
ProductSchema.methods.toJSON = function() {

    //desestructuramos lo que viene en toObject() [Aca viene la data del endpoint]
    const { __v, _id, ...product } = this.toObject();

    return product;
}


module.exports = model( 'Product', ProductSchema );