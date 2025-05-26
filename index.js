const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Rutas
const clientRoutes = require('./routes/clientRoutes');

const app = express();

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas de cliente (CRUD)
app.use(clientRoutes);

// Redireccionar / a /index (lista de clientes/miembros)
app.get('/', (req, res) => res.redirect('/index'));

// Si quieres, puedes poner un middleware de error 404 al final:
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});
const claseRoutes = require('./routes/claseRoutes');
app.use(claseRoutes);
// Lanzar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});