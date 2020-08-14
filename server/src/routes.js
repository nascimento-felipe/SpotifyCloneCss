const express = require('express');
const UserController = require('./controllers/UsersControllers');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        msg: 'Hello World'
    })
});

routes.post('/inscrever', UserController.create);

module.exports = routes;