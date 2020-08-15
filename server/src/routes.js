const express = require('express');
const knex = require('./database');
const routes = express.Router();

const UserController = require('./controllers/UsersControllers');

routes.get('/', (req, res) => {
    res.json({ msg: "Ta rodando"})
});

routes.get('/inscrever', UserController.index)

module.exports = routes;