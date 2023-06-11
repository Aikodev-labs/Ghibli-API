const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    original_title:{
        type: String,
        required: true,
    },
    original_title_romanised:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    movie_banner:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    producer:{
        type: String,
        required: true,
    },
    release_date:{
        type: String,
        required: true,
    },
    running_time:{
        type: String,
        required: true,
    },
    rt_score:{
        type: String,
        required: true,
    },
    people:{
        type: Array,
        required: true,
    },
    species:{
        type: Array,
        required: true,
    },
    locations:{
        type: Array,
        required: true,
    },
    vehicles:{
        type: Array,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

module.exports = model('Movie', movieSchema);

