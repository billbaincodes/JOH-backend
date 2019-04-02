const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('gallery')
  .then(gallery => res.json({ gallery : gallery }))
}

module.exports = {
  getAll
}