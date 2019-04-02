
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("park")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("park").insert([
        {
          id: 1,
          name: "Roosevelt National Forest",
          imgURL: "park.com"
        }
      ]);
    });
};
