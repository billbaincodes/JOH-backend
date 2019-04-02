
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("gallery")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("gallery").insert([
        {
          id: 1,
          park_id: 1,
          imgURL: "gallery yo"
        }
      ]);
    });
};
