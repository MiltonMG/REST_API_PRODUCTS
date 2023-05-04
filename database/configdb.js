const mongoose = require('mongoose');


const dbConnection = async() => {

    try {

        //Iniciando conexion, MONGODB_CNN es la cadena de conexion requerida 
        await mongoose.connect( process.env.MONGODB_CNN )
        console.log('bd online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }

}


module.exports = dbConnection;
