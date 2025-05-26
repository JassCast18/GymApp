const clientDao = require('../DAOs/clientDao');
const claseDao = require('../DAOs/claseDao');

exports.listarClientes = (req, res) => {
  const clients = clientDao.getAll();
  const clases = claseDao.getAll();
  res.render('index', { clients, clases });
};
exports.renderInscribirForm = (req, res) => {
  res.render('inscribirCliente');
};

exports.inscribirCliente = (req, res) => {
  clientDao.addClient(req.body);
  res.redirect('/index');
};

exports.verFicha = (req, res) => {
  const client = clientDao.findById(req.params.id);
  if (!client) return res.status(404).send('Cliente no encontrado');
  res.render('fichaMiembro', { miembro: client });
};

exports.renderEditarForm = (req, res) => {
  const client = clientDao.findById(req.params.id);
  if (!client) return res.status(404).send('Cliente no encontrado');
  res.render('editarCliente', { client });
};

exports.editarCliente = (req, res) => {
  clientDao.updateClient(req.params.id, req.body);
  res.redirect('/index');
};

exports.eliminarCliente = (req, res) => {
  clientDao.deleteClient(req.params.id);
  res.redirect('/index');
};