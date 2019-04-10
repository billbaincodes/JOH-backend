
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
        },
        {
          id: 7,
          trail_id: 3,
          imgURL: "https://i.imgur.com/OU4SIUD.jpg"
        },
        {
          id: 8,
          trail_id: 3,
          imgURL: "https://i.imgur.com/Ip5evxj.jpg"
        },
        {
          id: 9,
          trail_id: 3,
          imgURL: "https://i.imgur.com/c2U2SOP.jpg"
        },
        {
          id: 10,
          trail_id: 4,
          imgURL: "https://i.imgur.com/DCSBrZE.jpg"
        },
        {
          id: 11,
          trail_id: 4,
          imgURL: "https://i.imgur.com/bR8dr1Q.jpg"
        },
        {
          id: 12,
          trail_id: 4,
          imgURL: "https://i.imgur.com/pRD2qwO.jpg"
        },
        {
          id: 13,
          trail_id: 4,
          imgURL: "https://i.imgur.com/ZQugPMl.jpg"
        },
        {
          id: 14,
          trail_id: 5,
          imgURL: "https://i.imgur.com/7NO0HBD.jpg"
        }
      ]);
    });
};
