// Simula una base de datos de usuarios con un arreglo
const users = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'abcd' }
];

module.exports = {
  findUserByUsername: (username) => {
    return users.find(user => user.username === username);
  }
};