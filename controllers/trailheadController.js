const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('trailhead')
  .then(trailheads => res.json({ trailheads : trailheads }))
}

module.exports = {
  getAll
}