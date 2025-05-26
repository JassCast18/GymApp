const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

app.use(express.static(path.join(__dirname, 'static')));

// Configurar el motor de plantillas (EJS en este caso)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'Gimnasio Poptún' });
});

app.get('/members', (req, res) => {
  res.render('members', { title: 'Miembros - Gimnasio Poptún' });
});

app.get('/classes', (req, res) => {
  res.render('classes', { title: 'Clases - Gimnasio Poptún' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto - Gimnasio Poptún' });
});
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login - Gimnasio Poptún' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
