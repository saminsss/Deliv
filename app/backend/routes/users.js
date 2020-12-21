const router = require('express').Router();
let Controller = require('../controllers/users');

//Get all users
router.route('/').get(Controller.getAllUsers);

//Get/delete user by id
router.route('/:id')
    .get(Controller.getUserById)
    .delete(Controller.deleteUserById);

//Update user by id
router.route('/update/:id').post(Controller.updateUserById);

//Add new user
router.route('/add').post(Controller.addNewUser);

module.exports = router;