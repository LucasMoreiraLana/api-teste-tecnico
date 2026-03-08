const CreatePedidoService = require('../services/CreatePedidoService');

class CreatePedidoController {

    async store(req, res) {
        try {
          const pedido = await CreatePedidoService.criarPedido(req.body);
          return res.status(201).json(pedido);
        } catch (error) {
          return res.status(400).json({ erro: error.message });
        }
      }
}

module.exports = new CreatePedidoController();