const express = require('express');  //Me traigo la libreria de express.
const path=require('path');

class App {

    app;
    port;
    apiPath = {
        movies: '/api/v1/movies'
    };

    constructor(){
        this.app = express();
        this.port = 3000;

        // ejecucion de middlewares.
        this.middlewares();

        // ejecucion de rutas
        this.routes();

    }

    middlewares(){
        //lectura del body
        this.app.use(express.json());

        //parseo del body
        this.app.use(express.urlencoded({extended: true}));
        
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPath.movies, require('./routes/movies.routes'));
    }


    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = App

// const app= express() //Me devuelve la aplicacion de express que se guarda en app.
// const PORT =3000;


// app.listen ( PORT, () => {
//     console.log(`Servidor funcionando en puerto ${ PORT }`);  //Indico el puerto.
// }) 