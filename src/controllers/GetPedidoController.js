const GetPedidoService = require('../services/GetPedidoService');

class GetPedidoController {

    async index(req, res) {
        const pedidos = await GetPedidoService.listarTodos();
        return res.json(pedidos);
    }

    async showByNumero(req, res) {
      try {
        const { numero } = req.params; 
        const pedido = await GetPedidoService.buscarPorNumero(numero);
        return res.json(pedido);
      } catch (error) {
        return res.status(404).json({ erro: error.message });
    }
}

}

module.exports = new GetPedidoController();