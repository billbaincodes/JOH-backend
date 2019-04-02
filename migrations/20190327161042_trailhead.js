exports.up = function(knex, Promise) {
  return knex.schema.createTable("trailhead", function(table) {
    table.increments()
    table.string("name")
    table.string("imgURL")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trailhead")
}



/*


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

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("gallery")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("gallery").insert([
        {
          id: 1,
          location: 1,
          imgURL: "galleryitem1.com"
        }
      ]);
    });
};

*/
