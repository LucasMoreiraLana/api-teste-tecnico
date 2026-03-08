const UpdatePedidoService = require('../services/UpdatePedidoService');

class UpdatePedidoController {

    async update(req, res) {
        const { id } = req.params;
        const pedido = await UpdatePedidoService.atualizarPedido(id, req.body);
        return res.json(pedido);
    }


}

module.exports = new UpdatePedidoController();