const express = require('express');
const UserController = require('./controllers/UsersControllers');

const routes = express.Router();

routes.post('/inscrever', function(req, res) {
    UserController.create();
});

module.exports = routes;