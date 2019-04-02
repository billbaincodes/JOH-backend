
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("trail")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trail").insert([
        {
          id: 1,
          name: "Lost Lake",
          "park_id": 1,
          "trailhead_id": 1,
          distance: 23.2,
          elevation: 100,
          lake: false,
          river: false,
          mtn: false,
          flower: false,
          waterfall: false,
          redrock: false,
          price: 0
        }
      ]);
    });
};
