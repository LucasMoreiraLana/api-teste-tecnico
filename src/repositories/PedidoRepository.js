const Pedido = require('../models/Pedido');

class PedidoRepository {
  async create(data) {
    return await Pedido.create(data);
  }

  async findAll() {
    return await Pedido.find();
  }

  async findByNumero(numeroPedido) {
    return await Pedido.findOne({ numeroPedido });
  }

  async update(id, data) {
    return await Pedido.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Pedido.findByIdAndDelete(id);
  }

}

module.exports = new PedidoRepository();