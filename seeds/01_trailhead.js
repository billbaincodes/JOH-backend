
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trailhead")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trailhead").insert([
        {
          id: 1,
          name: "Herman Gulch",
          trailheadImg: "herman gulch pic"
        },
        {
          id: 2,
          name: "Bear Lake",
          trailheadImg: "bearlake pic"
        },
        {
          id: 3,
          name: "Second Creek",
          trailheadImg: "second creek pic"
        },
        {
          id: 4,
          name: "Paint Mines Interpretive Park",
          trailheadImg: "paint mines"
        },
        {
          id: 5,
          name: "Sprague Lake",
          trailheadImg: "Splake"
        }
      ]);
    });
};
