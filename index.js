const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Agrega esto

// Rutas
const clientRoutes = require('./routes/clientRoutes');
const claseRoutes = require('./routes/claseRoutes');

const app = express();


// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Sesión
app.use(session({
  secret: 'clave-secreta-super-segura', // usa una secreta real en prod
  resave: false,
  saveUninitialized: false
}));
// Rutas privadas
app.use('/index', requireLogin, clientRoutes); // rutas de clientes (incluye /index)
app.use('/clases', requireLogin, claseRoutes); // rutas de clases


// Middleware para proteger rutas privadas
function requireLogin(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}

// Rutas públicas
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

// Ruta para procesar el login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Aquí pon la validación real según tu base de usuarios
  if (username === 'admin' && password === '1234') {
    req.session.user = username; // o un objeto usuario real
    res.redirect('/index');
  } else {
    res.render('login', { error: 'Usuario o contraseña incorrectos' });
  }
});

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});


// Middleware 404
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Lanzar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});