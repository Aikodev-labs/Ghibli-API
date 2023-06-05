const { Router } = require(express);
const { getAllMovies, getRandomMovie} =require('../controllers/movies.controllers');

const router= Router();

router.get('/', getAllMovies); //http://localhost:3000/api/v1/movies GET
router.get('/randomMovie', getRandomMovie);

export default router;