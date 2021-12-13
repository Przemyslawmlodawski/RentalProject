const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const users_filmsSchema = new Schema({
    userData: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,

    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    borrowDate: {
        type: Date,
    },
    supposeReturnDate: {
        type: Date,
    },
    actualReturnDate: {
        type: Date
    }


})