const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('trail')
  .then(trails => res.json({ trails : trails }))
}

module.exports = {
  getAll
}