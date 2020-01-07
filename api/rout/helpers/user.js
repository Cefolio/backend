const db = require('../../dbConfig');

module.exports = {
  find, 
  add,
  findById, 
  remove, 
  findByEmail,
  findByName,
  findByUsername
};

function find() {
  return db('users');
};

async function add(user) {
  return db('users')
  .insert(user, 'id');
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
};

function findByEmail(email) {
    return db('users')
      .where({ email })
      .first();
  };

function findByUsername(username) {
    return db('users')
      .where({ username })
      .first();
  };

function findByName(name) {
    return db('users')
      .where({ name })
      .first();
  };

function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .del();
};