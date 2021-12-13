const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
}

);
const User = mongoose.model('User', userSchema)

module.exports = User;