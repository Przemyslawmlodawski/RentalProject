const router = require('express').Router();
let Film = require('../models/films.model');

router.route('/').get((req, res) => {
    Film.find()
        .then(films => res.json(films))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const type = req.body.type;
    const director = req.body.director;
    const length = Number(req.body.length);
    const rate = Number(req.body.rate);
    const description = req.body.description;
    const actors = req.body.actors;
    const date = Date.parse(req.body.date)

    const newFilm = new Film({
        title,
        type,
        director,
        length,
        rate,
        description,
        actors,
        date,
    });

    newFilm.save()
        .then(() => res.json('Film Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').get((req, res) => {
    Film.findById(req.params.id)
        .then((film) => res.json(film))
        .catch((err) => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    Film.findByIdAndDelete(req.params.id)
        .then(() => res.json('Film Deleted !'))
        .catch((err) => res.status(400).json('Erorr: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Film.findById(req.params.id)
        .then(film => {
            film.title = req.body.title;
            film.type = req.body.type;
            film.director = req.body.director;
            film.length = req.body.length;
            film.rate = req.body.rate;
            film.description = req.body.description;
            film.actors = req.body.actors;
            film.date = req.body.date


            film.save()
                .then(() => res.json('Film Updated !'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router;