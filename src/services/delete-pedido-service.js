const PedidoRepository = require('../repositories/pedido-repository');

class DeletePedidoService {

    async deletarPedido(id) {
    return await PedidoRepository.delete(id);
  }
  
}

module.exports = new DeletePedidoService();

