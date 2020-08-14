const knex = require('../database/connection')

class UsersController {

    async create(request, response) {
        const{
            email,
            password,
        } = request.body;

        const trx = knex.transaction();

        const newUser = {
            email,
            password
        };
        
        await trx('users').insert(newUser);
        await trx.commit();

        return response.json({
            ...newUser
        })
    }
};

module.exports = UsersController;