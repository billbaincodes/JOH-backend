const knex = require('../db/connection')


const getAll = (req, res, next) => {
  knex.select('*').from('gallery')
  .then(gallery => res.json({ gallery : gallery }))
}

const getByTrail = (req, res, next) => {
  let id = req.params.id

  knex.select('*').from('gallery').where('trail_id', id)
  .then(gallery => res.json({ gallery : gallery }))

}

module.exports = {
  getAll,
  getByTrail
}