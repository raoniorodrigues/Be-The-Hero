const express = require('express');

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

// Session Controller
routes.post('/session', SessionController.create);

// Ong Controller
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// incident Controller
routes.get('/incidentes', incidentController.index);
routes.post('/incidentes', incidentController.create);
routes.delete('/incidentes/:id', incidentController.delete);

// profile Controller
routes.get('/profile', profileController.index);

module.exports = routes;