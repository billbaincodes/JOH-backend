exports.up = function(knex, Promise) {
  return knex.schema.createTable("trail", function(table) {
    table.increments();
    table.string("name");
    table
      .integer("park_id")
      .references("park.id")
      .unsigned()
      .onDelete("cascade");
    table
      .integer("trailhead_id")
      .references("trailhead.id")
      .unsigned()
      .onDelete("cascade");
    table.float("distance");
    table.float("elevation");
    table.boolean("river");
    table.boolean("mtn");
    table.boolean("flower");
    table.boolean("lake");
    table.boolean("waterfall");
    table.boolean("redrock");
    table.float("price");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trail");
};
