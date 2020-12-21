const User = require('../models/user.model');

exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
};

exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
};

exports.deleteUserById = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json(`${user.username} deleted`))
        .catch(err => res.status(400).json('Error: ' + err))
};

exports.updateUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;

            user.save()
                .then(user => res.json(`${user.username} updated`))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
};

exports.addNewUser = (req, res) => {
    const newUser = new User({
        username: req.body.username
    });

    newUser.save()
        .then(user => res.json(`${user.username} added`))
        .catch(err => res.status(400).json('Error: ' + err))
};