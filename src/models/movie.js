const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

// para sub-dividir el esquema de la pelicula en sub-esquemas y que no quede tan largo el esquema de la pelicula
// además, establecemos que los campos de los sub-esquemas son requeridos, excepto los campos de las imagenes de la pelicula
const characterSchema = new Schema({
    id: { type: ObjectId, required: true },
    url: { type: String, required: true },
    name: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    },
    image: { type: String, required: true }
});

const speciesSchema = new Schema({
    id: { type: ObjectId, required: true },
    name: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    }
});

const locationSchema = new Schema({
    id: { type: ObjectId, required: true },
    name: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    },
    image: { type: String, required: true }
});

const vehicleSchema = new Schema({
    id: { type: ObjectId, required: true }, 
    name: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    },
    description: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    },
    image: { type: String, required: true }
});

// esquema de la pelicula con los sub-esquemas de los personajes, especies, locaciones y vehiculos de la pelicula
const movieSchema = new Schema({
    title: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    },
    original_title: { type: String, required: true },
    original_title_romanised: { type: String, required: true },
    image: { type: String, required: true },
    movie_banner: { type: String, required: true },
    description: {
        es: { type: String, required: true },
        jp: { type: String, required: true },
        en: { type: String, required: true }
    },
    director: { type: String, required: true },
    producer: { type: String, required: true },
    release_date: { type: String, required: true },
    running_time: { type: String, required: true },
    rt_score: { type: String, required: true },
    characters: { type: [characterSchema], required: false },
    species: { type: [speciesSchema], required: false },
    locations: { type: [locationSchema], required: false },
    vehicles: { type: [vehicleSchema], required: false },
    movie_images: { type: [String], required: false }
},
    {
        timestamps: true
    }
);

module.exports = model('Movie', movieSchema);

