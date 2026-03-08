const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  numeroPedido: { 
    type: String, 
    required: true,
    unique: true,
    index: true 
  },
  valorTotal: { 
    type: Number, 
    required: true 
  },
  dataCriacao: { 
    type: Date, 
    default: Date.now 
  },
  items: [{
    idItem: { type: String, required: true },
    quantidadeItem: { type: Number, required: true },
    valorItem: { type: Number, required: true }
  }]
});

module.exports = mongoose.model('Pedido', PedidoSchema);