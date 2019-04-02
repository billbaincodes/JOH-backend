const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('park')
  .then(parks => res.json({ parks : parks }))
}

module.exports = {
  getAll
}