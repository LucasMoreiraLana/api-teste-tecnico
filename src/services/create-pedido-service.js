const PedidoRepository = require('../repositories/pedido-repository');

class CreatePedidoService {
    async criarPedido(dados) {
        // Exemplo de regra: não permitir duplicata de numeroPedido
        const existe = await PedidoRepository.findByNumero(dados.numeroPedido);
        if (existe) {
          throw new Error('Já existe um pedido com este número.');
        }
        return await PedidoRepository.create(dados);
      }
}

module.exports = new CreatePedidoService();