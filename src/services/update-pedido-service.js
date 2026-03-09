const PedidoRepository = require('../repositories/pedido-repository');

class UpdatePedidoService {
    async atualizarPedido(id, dados) {
    return await PedidoRepository.update(id, dados);
  }
}

module.exports = new UpdatePedidoService();