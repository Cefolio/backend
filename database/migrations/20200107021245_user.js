exports.up = function(knex, promise) {
    return knex.schema.createTable("users", t =>{
        t.increments('id');

        t.string('username', 20);
        t.string('password');
        t.string('email');
        t.string('name');
        t.string('phone_number', 18);
        t.string('location');
        t.string('bio');
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('users')
  };

