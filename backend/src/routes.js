const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();


// Session Controller
routes.post('/session', SessionController.create);

// Ong Controller
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })


}), OngController.create);

// incident Controller
routes.get('/incidentes', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,incidentController.index);

routes.post('/incidentes', incidentController.create);

routes.delete('/incidentes/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),  
    })
}) ,incidentController.delete);

// profile Controller
routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
}).unknown(),
}), profileController.index);

module.exports = routes;