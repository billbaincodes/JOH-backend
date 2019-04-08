
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("park")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("park").insert([
        {
          id: 1,
          name: "Arapaho National Forest",
          parkImg: "park.com"
        },
        {
          id: 2,
          name: "Rocky Mountain National Park",
          parkImg: "park.com"
        },
      ]);
    });
};
