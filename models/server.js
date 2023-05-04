//importaciones
const express = require('express');
var cors = require('cors');
const dbConnection = require('../database/configdb');

class Server {
    
    constructor() {
        //Iniciando servidor en el constructor
        this.app = express();

        //Puerto
        this.port = process.env.PORT || 3000;

        //path
        this.productsPath = '/products';
        
        //Conectar a la bd
        this.conectarDB();


        //Middlewares
        this.middlewares();

        
        //Llamando rutas de aplicacion
        this.routes();
    
    }

    listen() {//Iniciando servidor en el puerto definido en el constructor 
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }

    async conectarDB() {
        //Metodo que realiza la conexion a la base de datos
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Middleware para poder recibir JSON
        this.app.use(express.json());

        //Utilizando el html del directorio publico
        this.app.use(express.static('public'));

    
    }

    routes() {

        //implementando rutas, con el endpoint dado en el constructor y las indicaciones para el endpoint 
        this.app.use( this.productsPath , require('../routes/products.routes') );

        //Not found
        this.app.use('/*', function notFound(req, res) {
            res.status(404).json({ error: `No se encontró la ruta ${req.originalUrl}` });
          })
    }

}

module.exports = Server;