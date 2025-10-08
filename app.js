require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const productosRoutes = require('./routes/productos');
const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rutas de productos
app.use('/productos', productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});