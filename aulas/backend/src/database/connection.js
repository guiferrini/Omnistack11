//conecta ongs ao bd
const knex = require('knex'); //importando o knex
const configuration = require('../../knexfile'); //impostando configurações do BD

const connection = knex(configuration.development);

module.exports = connection;//exportanto a conexao p o bd
