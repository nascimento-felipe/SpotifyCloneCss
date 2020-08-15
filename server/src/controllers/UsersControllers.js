const knex = require('../database');
const {
    orWhereNotExists
} = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users')

        return res.json(results);
    },

    async create(req, res, next) {
        try {

            const {
                email,
                password
            } = req.body;

            await knex('users').insert({
                email,
                password
            })

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    }
};