const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;


/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Remover uma informação no back-end
 * 
 */

 /**
  * Tipos de parametros:
  * 
  * 
  * Query Paramms: parametros nomeados enviados na rota após o simbolo de ? 
  * (filtros, paginação)
  * Route Paramms: parametros para identificar recursos
  * Resquest Body: 
  */
