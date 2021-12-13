const router = require('express').Router();
let user_film = require('../models/users_films.model');

router.route('/').get((req, res) => {
    user_films.find()
        .then(users_films => res.json(users_films))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const userData = req.body.userData;
    const title = req.body.title;
    const borrowDate = Date.parse(req.body.borrowDate);
    const supposeReturnDate = Date.parse(req.body.supposeReturnDate)
    const actualReturnDate = Date.parse(req.body.actualReturnDate)

    const newUser_Film = new user_film({
        userData,
        title,
        borrowDate,
        supposeReturnDate,
        actualReturnDate

    });
    newUser_Film.save()
        .then(() => res.json('Borrow'))
        .catch(err => res.status(400).json('Error:' + err))
})

module.exports = router;