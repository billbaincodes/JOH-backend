exports.up = function(knex, Promise) {
  return knex.schema.createTable("park", function(table) {
    table.increments();
    table.string("name");
    table.string("parkImg");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("park");
};
