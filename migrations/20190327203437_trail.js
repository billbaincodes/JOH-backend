
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trail", function(table) {
    table.increments();
    table.string("name");
    table
      .integer("character_id")
      .references("character.id")
      .unsigned()
      .onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trail");
};
