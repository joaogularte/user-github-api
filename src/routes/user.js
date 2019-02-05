const express = require('express');

/* Relative dependencies  */
const UserSchema = require('./schemas/UserSchema');
const UserController = require('../controllers/UserController');
const schemaValidator = require('../middlewares/schemaValidator');

const router = express.Router();

/* GET /api/users */
router.get('/', schemaValidator(UserSchema, 'list'), UserController.list);

/* GET /api/users/:username/details */
router.get('/:username/details', schemaValidator(UserSchema, 'get'), UserController.getUser);

/* GET /api/users/:username/repos */
router.get('/:username/repos', schemaValidator(UserSchema, 'get'), UserController.getUserRepo);

module.exports = router;
