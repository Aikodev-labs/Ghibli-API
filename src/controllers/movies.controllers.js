const { response }= require('express');

const getAllMovies = async(req,res=response) => {
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

const getRandomMovie =async(req,res=response) => {

}

module.exports ={
    getAllMovies, getRandomMovie
}