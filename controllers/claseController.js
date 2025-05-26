const claseDao = require('../DAOs/claseDao');

exports.listarClases = (req, res) => {
  const clases = claseDao.getAll();
  // Renderiza el index con las clases y el resto de datos que necesites
  res.render('index', { clases, clients: req.clients || [] }); // Ajusta según lo que pasas a index.ejs
};

exports.renderAgregarClase = (req, res) => {
  res.render('agregarClase');
};

exports.agregarClase = (req, res) => {
  claseDao.addClase(req.body);
  res.redirect('/index');
};

exports.renderEditarClase = (req, res) => {
  const clase = claseDao.findById(req.params.id);
  if (!clase) return res.status(404).send('Clase no encontrada');
  res.render('editarClase', { clase });
};

exports.editarClase = (req, res) => {
  claseDao.updateClase(req.params.id, req.body);
  res.redirect('/index');
};

exports.eliminarClase = (req, res) => {
  claseDao.deleteClase(req.params.id);
  res.redirect('/index');
};