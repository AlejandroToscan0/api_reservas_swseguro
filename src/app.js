const express = require('express');
const dotenv = require('dotenv');
const hotelesRoutes = require('./routes/hoteles.routes');
const clientesRoutes = require('./routes/clientes.routes');
const reservasRoutes = require('./routes/reservas.routes');
const errorMiddleware = require('./middlewares/error.middleware');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/hoteles', hotelesRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/reservas', reservasRoutes);

app.use(errorMiddleware);

module.exports = app;
