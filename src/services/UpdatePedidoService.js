const PedidoRepository = require('../repositories/PedidoRepository');

class UpdatePedidoService {
    async atualizarPedido(id, dados) {
    return await PedidoRepository.update(id, dados);
  }
}

module.exports = new UpdatePedidoService();