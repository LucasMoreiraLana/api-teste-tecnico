require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/pedidoRoutes');

const app = express();

app.use(express.json());
app.use(routes); // Usa as rotas que definimos

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado e camadas prontas!'))
  .catch(err => console.error(err));

app.listen(process.env.PORT || 3000);