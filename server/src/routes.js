const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UsersControllers');

routes.get('/', (req, res) => {
    res.json({ msg: "Ta rodando"})
});

routes.post('/inscrever', UserController.create)

module.exports = routes;