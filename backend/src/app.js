const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const {errors } = require('celebrate');
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Entity:
 * ONG
 * Incident
 */

 /**
  * Functions:
  * ONG:
  *     Login
  *     Cadastro
  *     Logout
  *     Cadastrar novos casos
  *     Deletar casos
  *     Listar casos da ONG em espec�fico
  *     Lista todos os casos
  *Entrar em contato com as ONGs
  */
/**
 * M�todos HTTP:
 *
 * GET: Buscar uma informa��o do back-end
 * POST: Criar uma informa��o no back-end
 * PUT: ALterar uma informa��o do Back-end
 * DELETE: Deletar uma informa��o
 */

/**
 * Tipos de par�metro:
 *
 * Requent body: Corpo da requisi��o, utilizado para criar ou alterar recursos.
 * Query Params: nomeados enviados na rota ap�s "?"
 * usados para eg. pagina��o, filtros.
 * Route Params: Par�metros utilizados para identificar recursos.
 */

/*
* SQL: MySQL, SQLite, PostgreSQL
* NoSQL: MongoDB
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
module.exports = app;

