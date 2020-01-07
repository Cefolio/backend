const db = require('../../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove
};

function find() {
  return db('recipes');
};

async function insert(recipes) {
  return db('recipes')
  .insert(recipes);
};

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
};

function remove(id) {
  return db('recipes')
    .where({ id })
    .first()
    .del();
};