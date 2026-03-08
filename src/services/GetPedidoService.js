const PedidoRepository = require('../repositories/PedidoRepository');

class GetPedidoService {
    async listarTodos() {
        return await PedidoRepository.findAll();
      }
    
    async buscarPorNumero(numeroPedido) {
    const pedido = await PedidoRepository.findByNumero(numeroPedido);
      
    if (!pedido) {
        throw new Error('Pedido não encontrado com este número.');
    }
      
      return pedido;
    }
}

module.exports = new GetPedidoService();