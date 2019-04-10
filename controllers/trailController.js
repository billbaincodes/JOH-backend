const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*', 'trail.name AS name', 'park.name AS park_id', 'trailhead.name as trailhead_id').from("trail")
  .innerJoin("park", "trail.park_id", "park.id")
  .innerJoin("trailhead", "trail.trailhead_id", "trailhead.id")
  .then(trails => res.json({ trails : trails }))
}

const searchTrail = (req, res, next) => {
  let searchValue = req.params.searchValue

  knex.select('*', 'trail.name AS name', 'park.name AS park_id', 'trailhead.name as trailhead_id')
  .from('trail').whereRaw(`UPPER(trail.name) LIKE UPPER('%${searchValue}%')`)
  .innerJoin("park", "trail.park_id", "park.id")
  .innerJoin("trailhead", "trail.trailhead_id", "trailhead.id")
  .then(trails => res.json({ trails : trails }))

}


module.exports = {
  getAll,
  searchTrail
}