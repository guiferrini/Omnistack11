const express = require('express');

const routes = express.Router(); //estou desaclopando Router de express, separei as rotas, p uma nova variável

routes.post('/users', (request, response) => { //rota raiz
    const params = request.body; //requisições q chegam por query
    console.log(params);
    
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Guilherme',
        Idade: '30'
    })
});


//p acessar pelo index.js, exporto uma variavel de dentro de um arquivo
module.exports = routes;