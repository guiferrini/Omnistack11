//arquivo principal da aplicação
const express = require('express'); //variavel express tem tds as funcionalidades do framework express

const app = express(); //variavé q armazena a aplicação

app.get('/', (request, response) => { //rota raiz
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Guilherme',
        Idade: '30'
    })
});

app.listen(3333);//p rodar: node index.js
