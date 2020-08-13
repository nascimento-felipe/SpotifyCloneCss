const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ msg: 'Hello World' })
});

module.exports = routes;