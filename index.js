const dotenv = require('dotenv');
dotenv.config();

const { db } = require('./src/db/config.js');
db();

const { App } = require('./src/app.js');

const server = new App();

server.listen();