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
  *     Listar casos da ONG em específico
  *     Lista todos os casos
  *Entrar em contato com as ONGs
  */
/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: ALterar uma informação do Back-end
 * DELETE: Deletar uma informação
 */

/**
 * Tipos de parâmetro:
 *
 * Requent body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * Query Params: nomeados enviados na rota após "?"
 * usados para eg. paginação, filtros.
 * Route Params: Parâmetros utilizados para identificar recursos.
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

