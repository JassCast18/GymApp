const Clase = require('../models/clase');

let clases = [
  new Clase(1, 'Zumba', 'Martes y Jueves 7PM'),
  new Clase(2, 'Spinning', 'Lunes y Miércoles 6PM'),
  new Clase(3, 'Yoga', 'Viernes 8AM'),
  new Clase(4, 'Pilates', 'Sábado 9AM'),
  new Clase(5, 'Crossfit', 'Lunes a Viernes 5PM'),
  new Clase(6, 'Boxeo', 'Martes y Jueves 8PM')
];

module.exports = {
  getAll: () => clases,
  findById: (id) => clases.find(c => c.id == id),
  addClase: (data) => {
    const id = clases.length ? clases[clases.length - 1].id + 1 : 1;
    const clase = new Clase(id, data.nombre, data.horario);
    clases.push(clase);
    return clase;
  },
  updateClase: (id, data) => {
    const clase = clases.find(c => c.id == id);
    if (clase) {
      clase.nombre = data.nombre;
      clase.horario = data.horario;
      return true;
    }
    return false;
  },
  deleteClase: (id) => {
    const idx = clases.findIndex(c => c.id == id);
    if (idx !== -1) {
      clases.splice(idx, 1);
      return true;
    }
    return false;
  }
};