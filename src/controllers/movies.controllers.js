const { response } = require('express');
const Movie = require('../models/movie.js');

const createMovie = async (req, res = response) => {
    try {
        const movie = Movie.create(req.body);
        return res.status(201).json({
            ok: true,
            movie
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const getAllMovies = async (req, res = response) => {
    try {
        const movies = await Movie.find();
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
    // try{
    //     const movies= await db.Movies.findAll();
    //     return res.status(200).json({
    //         ok:true,
    //         movies
    //     })
    // } catch(error){
    //     return res.status(500).json({
    //         error:'Internal server error'
    //     })
    // }
}

const getRandomMovie = async (req, res = response) => {

}

module.exports = {
    getAllMovies, getRandomMovie, createMovie
}