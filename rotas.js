const { Router } = require('express');

const controlePredios = require('./controladores/predios');
const controleSalas = require("./controladores/salas");
const seguranca = require('./controladores/seguranca');

const rotas = new Router();

rotas.route("/login")
     .post(seguranca.login)

rotas.route('/salas')
   .get(seguranca.verificaJWT, controleSalas.getSalas)
   .post(seguranca.verificaJWT, controleSalas.addSala)
   .put(seguranca.verificaJWT, controleSalas.updateSala)

rotas.route('/salas/:codigo')
   .get(seguranca.verificaJWT, controleSalas.getSalaPorCodigo)
   .delete(seguranca.verificaJWT, controleSalas.deleteSala)


rotas.route('/predios')
     .get(seguranca.verificaJWT, controlePredios.getPredios)
     .post(seguranca.verificaJWT, controlePredios.addPredio)
     .put(seguranca.verificaJWT, controlePredios.updatePredio)

rotas.route('/predios/:codigo')
     .get(seguranca.verificaJWT, controlePredios.getPredioPorCodigo)
     .delete(seguranca.verificaJWT, controlePredios.deletePredio)

module.exports = rotas;