exports.up = function(knex, Promise) {
  return knex.schema.createTable("gallery", function(table) {
    table.increments();
    table
    .integer("park_id")
    .references("park.id")
    .unsigned()
    .onDelete("cascade");
    table.string("imgURL");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("gallery");
};
