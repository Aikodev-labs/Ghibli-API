const { response } = require('express');
const Movie = require('../models/movie.js');

const createMovie = async (req, res = response) => {
    try {
        const movie = await Movie.create(req.body);
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

const getMovieDetail =async (req, res=response) => {
    try{
        const movie= await Movie.findById(req.params.id);

        if(!movie){
            return res.status(404).json({
                ok:false,
                error:'La pelicula no existe'
            })
        }

        return res.status(200).json({
            ok:true,
            data:movie
        })
    }
    catch(error){
        res.status(500).json({
            error:'Error en el servidor'
        })
    }

}


const getAllMovies = async (req, res = response) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            ok:true,
            movies: movies
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const updateMovie = async(req,res=response) =>{
    try {
        const movie=await Movie.updateOne(
            {id:req.params.id}, { ...req.body}, {new: true})
        return res.status(200).json({
            ok:true,
            data:movie
        })
    }catch(e){
        return res.status(500).json({error: 'Error en el servidor'})
    }
}

const deleteMovie = async(req, res=response) =>{
    try{
        const movie = await Movie.deleteOne({where:{id: req.params.id}});
        return res.json({
            ok:true,
            status: 201
        })

    }catch(e){
        return res.status(500).json({
            ok:false,
            message: 'Error en el servidor'
        })
    }
}

const getRandomMovie = async (req, res = response) => {
    try{
        const movies= await Movie.find();

        if (movies.length==0){
            return res.status(404).json({
                ok:false,
                message: 'No se encontraron peliculas'
            })
        }

        const indiceRandom=Math.floor(Math.random()*movies.length);
        
        const randomMovie= movies[indiceRandom];

        return res.status(200).json({
            ok:true,
            data: randomMovie 
        })

    }

    catch{
        return res.status(500).json({
            ok:false,
            message: 'Error en el servidor'
        })
    }
}

module.exports = {
    getAllMovies, getRandomMovie, createMovie, updateMovie, deleteMovie, getMovieDetail
}