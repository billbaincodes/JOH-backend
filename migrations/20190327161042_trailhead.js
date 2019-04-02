exports.up = function(knex, Promise) {
  return knex.schema.createTable("trailhead", function(table) {
    table.increments();
    table.string("name");
    table.string("imageURL");
    table
      .integer("character_id")
      .references("character.id")
      .unsigned()
      .onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trailhead");
};
