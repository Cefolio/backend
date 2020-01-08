const db = require('../../dbConfig');

module.exports = {
  find, 
  insert,
  findById, 
  remove,
  findChef,
  findGenre
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

function findChef(user_id){
  return db('recipes')
  .where({ user_id })
}

function findGenre(meal_type){
  return db('recipes')
  .where({ meal_type })
}