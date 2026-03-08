const PedidoRepository = require('../repositories/PedidoRepository');

class DeletePedidoService {

    async deletarPedido(id) {
    return await PedidoRepository.delete(id);
  }
  
}

module.exports = new DeletePedidoService();

