const knex = require('../db/connection')


const getAll = (req, res, next) => {
  // knex.select('*').from('trail')
  // .then(trails => res.json({ trails : trails }))


  knex.select('*', 'trail.name AS name', 'park.name AS park_id', 'trailhead.name as trailhead_id').from("trail")
  .innerJoin("park", "trail.park_id", "park.id")
  .innerJoin("trailhead", "trail.trailhead_id", "trailhead.id")
  .then(trails => res.json({ trails : trails }))

}

module.exports = {
  getAll
}