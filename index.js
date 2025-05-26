const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const clientDao = require('./dao/clientDao');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(authRoutes);

// Ruta raíz (opcional, si quieres permitir ir directo a login)
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/index', (req, res) => {
  const clients = clientDao.getAll(); // o como sea tu método para obtener clientes
  res.render('index', { clients });   // <-- Aquí pasas la variable 'clients'
});

const miembros = [
  { id: 1, nombre: 'Juan Pérez', membresia: 'Activa', email: 'juan.perez@email.com', telefono: '555-1234' },
  { id: 2, nombre: 'María García', membresia: 'Inactiva', email: 'maria.garcia@email.com', telefono: '555-5678' },
  { id: 3, nombre: 'Carlos López', membresia: 'Activa', email: 'carlos.lopez@email.com', telefono: '555-9876' }
];

app.get('/miembro/:id', (req, res) => {
  const miembro = miembros.find(m => m.id == req.params.id);
  if (!miembro) {
    return res.status(404).send('Socio no encontrado');
  }
  res.render('fichaMiembro', { miembro });
});
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});