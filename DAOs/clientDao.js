const Client = require('../models/client');
let clients = [
  new Client(1, 'Juan Pérez', 'juan.perez@email.com', '555-1234', 'Activa'),
  new Client(2, 'María García', 'maria.garcia@email.com', '555-5678', 'Inactiva'),
  new Client(3, 'Carlos López', 'carlos.lopez@email.com', '555-9876', 'Activa')
];

module.exports = {
  getAll: () => clients,
  findById: (id) => clients.find(c => c.id == id),
  addClient: (data) => {
    const id = clients.length ? clients[clients.length - 1].id + 1 : 1;
    const client = new Client(id, data.nombre, data.email, data.telefono, data.membresia);
    clients.push(client);
    return client;
  },
  updateClient: (id, data) => {
    const client = clients.find(c => c.id == id);
    if (client) {
      client.nombre = data.nombre;
      client.email = data.email;
      client.telefono = data.telefono;
      client.membresia = data.membresia;
      return true;
    }
    return false;
  },
  deleteClient: (id) => {
    const idx = clients.findIndex(c => c.id == id);
    if (idx !== -1) {
      clients.splice(idx, 1);
      return true;
    }
    return false;
  }
};