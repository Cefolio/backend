
exports.seed = function(knex) {
  return knex('users').insert([
    {username: "Armando Castillo", password: "carmando"},
    {username: "Alyssa Davis", password: "dalyssa"},
    {username: "Ron Harrison", password: "hron"},
    {username: "Deandre Bolton", password: "bdeandre"},
    {username: "Ebony Kwame", password: "kebony"},
  ]);
};
