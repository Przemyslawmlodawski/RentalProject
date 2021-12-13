const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Sucess')
})

const filmsRouter = require('./routes/films')
const usersRouter = require('./routes/users')
const users_filmsRouter = require('./routes/users_films')

app.use('/films', filmsRouter);
app.use('/users', usersRouter);
app.use('/users_films', users_filmsRouter)


app.listen(1337, () => { console.log('server') })