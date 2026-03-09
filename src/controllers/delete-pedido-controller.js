const DeletePedidoService = require('../services/delete-pedido-service');

class DeletePedidoController {

    async delete(req, res) {
        const { id } = req.params;
        await DeletePedidoService.deletarPedido(id);
        return res.status(204).send();
    }

}

module.exports = new DeletePedidoController();