const db = require('../database/db-config');

module.exports = {
  find, 
  findBy,
  findById,
  add
};


function find() {
  return db('users')
}


function findById(id) {
  return db('users')
  .where({id})
  .first();
}


function findBy(filter) {
  return db('users')
  .select('id', 'username', 'password')
  .where(filter)
}


function add(user) {
  return db('users')
    .insert(user)
    .then(([id]) => 
      findById(id)
    );
}
