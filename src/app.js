const express = require('express');  //Me traigo la libreria de express.
const path=require('path');
const cors=require('cors');

class App {

    app;
    port;
    apiPath = {
        movies: '/api/v1/movies'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';

        
        this.middlewares();

        
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        
        this.app.use(express.json());

        this.app.use(express.urlencoded({extended: true}));
         
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPath.movies, require('./routes/movies.routes'));
    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = {
    App
}
