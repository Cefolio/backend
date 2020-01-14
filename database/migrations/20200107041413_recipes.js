exports.up = function(knex, promise) {
    return knex.schema.createTable("recipes", t =>{
        t.increments('id');

        t.string('title', 100);
        t.string('meal_type', 24);
        t.text('img');
        t.text('ingredients');
        t.text('instructions');
        
        // foreign key to user
         t.integer('user_id')
         .unsigned()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, promise) {
      return knex.schema.dropTableIfExists('recipes')
  };

