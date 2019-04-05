
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
          imgURL: "trailhad.com"
        },
        {
          id: 2,
          name: "Bear Lake",
          imgURL: "trailhad.com"
        }
      ]);
    });
};
