
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('park').del()
    .then(function () {
      // Inserts seed entries
      return knex('park').insert([
        {
          id: 1, 
          name: 'rowValue1'
        },
        {
          id: 2,
          name: 'rowValue2'
        },
        {
          id: 3,
          name: 'rowValue3'
        }
      ]);
    });
};
