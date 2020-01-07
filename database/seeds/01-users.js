
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, 
          username: 'admin', 
          password:'drownd',
          email:'example@email.com',
          location: 'Kedweeni',
          name: 'Oris Veta',
          bio: 'A chef of many talents, but most of all web design',
          phone_number: '515-210-8080'}
      ]);
    });
};
