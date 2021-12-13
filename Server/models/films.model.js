const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const filmsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,

    },
    type: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    director: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,

    },
    length: {
        type: Number,
        required: true,

    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    actors: {
        type: String,
        required: true,


    },
    date: {
        type: Date,
        required: true
    }




});

const Films = mongoose.model('Films', filmsSchema);


module.exports = Films;