const { Router } = require('express');
const { getAllMovies, getRandomMovie, createMovie, updateMovie, deleteMovie, getMovieDetail} =require('../controllers/movies.controllers');

const router= Router();

router.get('/', getAllMovies); //http://localhost:8080/api/v1/movies GET
router.get('/randomMovie', getRandomMovie); //http://localhost:8080/api/v1/movies/randomMovie GET
router.get('/:id', getMovieDetail); //http://localhost:8080/api/v1/movies/:id
router.post('/',createMovie); //http://localhost:8080/api/v1/movies POST
router.put('/:id/edit',updateMovie); //http://localhost:8080/api/v1/movies/:id/edit POST
router.delete('/delete/:id',deleteMovie); //http://localhost:8080/api/v1/movies/delete/:id DELETE


module.exports = router;