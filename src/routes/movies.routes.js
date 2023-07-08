const { Router } = require('express');
const { check } =require('express-validator');
const { getAllMovies, getRandomMovie, createMovie, updateMovie, deleteMovie, getMovieDetail} =require('../controllers/movies.controllers');
const {fieldValidator} = require('../middlewares/fields-validator');

const router= Router();

router.get('/', getAllMovies); //http://localhost:8080/api/v1/movies GET
router.get('/randomMovie', getRandomMovie); //http://localhost:8080/api/v1/movies/randomMovie GET
router.get('/:id', getMovieDetail); //http://localhost:8080/api/v1/movies/:id
router.post('/',[
    check('title.es', 'El titulo en español de la pelicula es obligatorio').trim().notEmpty(),
    check('title.jp', 'El titulo en japones de la pelicula es obligatorio').trim().notEmpty(),
    check('title.en', 'El titulo en inglés de la pelicula es obligatorio').trim().notEmpty(),
    check('original_title', 'El titulo original de la pelicula es obligatorio').trim().notEmpty(),
    check('image', 'La imagen de la pelicula es obligatorio').trim().notEmpty(),
    check('movie_banner', 'El banner de la pelicula es obligatorio').trim().notEmpty(),
    check('original_title_romanised','El titulo romanisado de la pelicula es obligatorio').trim().notEmpty(),
    check('description.es', 'La descripción de la pelicula en español es obligatoria').trim().notEmpty(),
    check('description.jp', 'La descripción de la pelicula en japones es obligatoria').trim().notEmpty(),
    check('description.en', 'La descripción de la pelicula en inglés es obligatoria').trim().notEmpty(),
    check('director','El director de la pelicula es obligatorio').trim().notEmpty(),
    check('producer','El productor de la pelicula es obligatorio').trim().notEmpty(),
    check('release_date','La fecha de lanzamiento de la pelicula es obligatoria').trim().notEmpty(),
    check('running_time','La duración de la pelicula es obligatoria').trim().notEmpty(),
    check('rt_score','La calificación de la pelicula es obligatorio').trim().notEmpty(),
    fieldValidator
], createMovie); //http://localhost:8080/api/v1/movies POST
router.put('/:id/edit',updateMovie); //http://localhost:8080/api/v1/movies/:id/edit POST
router.delete('/delete/:id',deleteMovie); //http://localhost:8080/api/v1/movies/delete/:id DELETE


module.exports = router;