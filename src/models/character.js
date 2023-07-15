const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;


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

module.exports = model('Character', characterSchema);