const { Router } = require('express');
const CreatePedidoController = require('../controllers/CreatePedidoController');
const GetPedidoController = require('../controllers/GetPedidoController');
const UpdatePedidoController = require('../controllers/UpdatePedidoController');
const DeletePedidoController = require('../controllers/DeletePedidoController');

const routes = Router();

routes.post('/pedidos', CreatePedidoController.store);
routes.get('/pedidos', GetPedidoController.index);
routes.put('/pedidos/:id', UpdatePedidoController.update);
routes.delete('/pedidos/:id', DeletePedidoController.delete);
routes.get('/pedidos/numero/:numero', GetPedidoController.showByNumero);

module.exports = routes;