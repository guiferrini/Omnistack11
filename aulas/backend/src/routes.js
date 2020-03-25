const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router(); //estou desaclopando Router de express, separei as rotas, p uma nova variável

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);


routes.get('/incidents', IncidentController.index); //listando os incidentes, verificar se estao sendo criados com sucesso
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


//p acessar pelo index.js, exporto uma variavel de dentro de um arquivo
module.exports = routes;