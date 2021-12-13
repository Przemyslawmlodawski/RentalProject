const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then((film) => res.json(film))
        .catch((err) => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted !'))
        .catch((err) => res.status(400).json('Erorr: ' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const date = Date.parse(req.body.date)


    const newUser = new User({
        name,
        lastname,
        address,
        phone,
        date,

    });
    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error:' + err))
})

module.exports = router;