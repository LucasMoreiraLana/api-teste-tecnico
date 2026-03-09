const { Router } = require('express');
const CreatePedidoController = require('../controllers/create-pedido-controller');
const GetPedidoController = require('../controllers/get-pedido-controller');
const UpdatePedidoController = require('../controllers/update-pedido-controller');
const DeletePedidoController = require('../controllers/delete-pedido-controller');

const routes = Router();

routes.post('/pedidos', CreatePedidoController.store);
routes.get('/pedidos', GetPedidoController.index);
routes.put('/pedidos/:id', UpdatePedidoController.update);
routes.delete('/pedidos/:id', DeletePedidoController.delete);
routes.get('/pedidos/numero/:numero', GetPedidoController.showByNumero);

module.exports = routes;