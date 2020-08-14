const api = require('../../services/api')

async function handleSubmit([data]) {
    await api.post('users', data)

    alert('Usuário criado com sucesso!')
}