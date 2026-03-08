const DeletePedidoService = require('../services/DeletePedidoService');

class DeletePedidoController {

    async delete(req, res) {
        const { id } = req.params;
        await DeletePedidoService.deletarPedido(id);
        return res.status(204).send();
    }

}

module.exports = new DeletePedidoController();