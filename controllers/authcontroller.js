const userDao = require('../DAOs/userDao');

exports.renderLogin = (req, res) => {
  res.render('login', { error: null });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = userDao.findUserByUsername(username);
  if (user && user.password === password) {
    // Aquí puedes manejar sesión si usas express-session
    res.redirect('/index');
  } else {
    res.render('login', { error: 'Usuario o contraseña incorrectos' });
  }
};