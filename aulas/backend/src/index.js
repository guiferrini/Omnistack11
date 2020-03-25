//arquivo principal da aplicação
const express = require('express'); //variavel express tem tds as funcionalidades do framework express
const cors = require('cors');
//importando
const routes = require('./routes');

const app = express(); //variavé q armazena a aplicação

app.use(cors());
app.use(express.json()); //informa q estamos utilizando Json p o body das requisições, eu falo p o express ir no corpo da minha requisição e converter o json em um objeto do JS, p a aplicação possa entender
app.use(routes);

// /users - recurso

/* Metodos HTTP
get: buscar uma informação do back
post: Cria
put: altera
delete: apaga
*/


app.listen(3333);//p rodar: node index.js 

