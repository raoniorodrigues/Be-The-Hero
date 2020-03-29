const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


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
