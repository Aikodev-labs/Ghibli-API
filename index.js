const dotenv = require('dotenv');
dotenv.config();


const { db } = require('./src/db/config');
db();

const { App } = require('./src/app');

const server = new App();

server.listen();