const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./config/database');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

require('dotenv').config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Conexión base de datos
sequelize.sync()
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
