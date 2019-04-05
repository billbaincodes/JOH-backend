
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("gallery")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("gallery").insert([
        {
          id: 1,
          trail_id: 1,
          imgURL: "https://i.imgur.com/GLw8DyW.jpg"
        },
        {
          id: 2,
          trail_id: 1,
          imgURL: "https://i.imgur.com/smOxHAJ.jpg"
        },
        {
          id: 3,
          trail_id: 1,
          imgURL: "https://i.imgur.com/lYCxvk1.jpg"
        },
        {
          id: 4,
          trail_id: 2,
          imgURL: "https://i.imgur.com/qEmWNWY.jpg"
        },
        {
          id: 5,
          trail_id: 2,
          imgURL: "https://i.imgur.com/7lpQYKk.jpg"
        },
        {
          id: 6,
          trail_id: 2,
          imgURL: "https://i.imgur.com/DEsJamW.jpg"
        }
      ]);
    });
};
