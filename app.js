require('dotenv').config();

const Server = require('./models/server');


//Iniciando Servidor
const server = new Server();
server.listen();