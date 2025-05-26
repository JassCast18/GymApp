const claseDao = require('../dao/claseDao');

exports.listarClases = (req, res) => {
  res.render('clases', { clases: claseDao.getAll() });
};

exports.renderAgregarForm = (req, res) => {
  res.render('agregarClase');
};

exports.agregarClase = (req, res) => {
  claseDao.addClase(req.body);
  res.redirect('/clases');
};

exports.renderEditarForm = (req, res) => {
  const clase = claseDao.findById(req.params.id);
  if (!clase) return res.status(404).send('Clase no encontrada');
  res.render('editarClase', { clase });
};

exports.editarClase = (req, res) => {
  claseDao.updateClase(req.params.id, req.body);
  res.redirect('/clases');
};

exports.eliminarClase = (req, res) => {
  claseDao.deleteClase(req.params.id);
  res.redirect('/clases');
};