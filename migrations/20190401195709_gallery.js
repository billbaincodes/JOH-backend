exports.up = function(knex, Promise) {
  return knex.schema.createTable("gallery", function(table) {
    table.increments();
    table
    .integer("trail_id")
    .references("trail.id")
    .unsigned()
    .onDelete("cascade");
    table.string("imgURL");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("gallery");
};
