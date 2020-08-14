const knex = require('../database/connection')

const UsersController = () => {

    async function create(request, response) {

        try {
            const {
                email,
                password,
            } = request.body;

            const trx = knex.transaction();

            const newUser = {
                email,
                password
            };

            await trx('users').insert(newUser)
            await trx.commit();

            return response.status(201).json({
                ...newUser
            })

        } catch (err) {
            console.log(err)
        }
    }
};

module.exports = UsersController;