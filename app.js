// From Dan's Guides: https://github.com/justsml/guides/tree/master/express/setup-guide
// TODO: INSTALL PRE-REQS:
//  npm install express cors body-parser morgan nodemon
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = module.exports = express()
const port = parseInt(process.env.PORT || 3000)
const parkRoutes = require('./routes/parkRoutes')
const trailRoutes = require('./routes/trailRoutes') 
const trailheadRoutes = require('./routes/trailheadRoutes') 
const galleryRoutes = require('./routes/galleryRoutes')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({origin: true, credentials: true})) // <= Disable if you don't need CORS
// TODO: Optional Static file handler:
// app.use('/', express.static('./build'))

// TODO: ADD (MOUNT) YOUR MIDDLEWARE (ROUTES) HERE:
// Example: app.use('/api/cat', require('./routes/cat'))

app.get('/', (req, res, next) =>{

  process.env.NODE_ENV === 'production' ?
  res.send("Production") 
  
  :
  res.json({
    parks: `http://localhost:${port}/park`,
    trails: `http://localhost:${port}/trail`,
    trailheads: `http://localhost:${port}/trailhead`,
    gallery: `http://localhost:${port}/gallery`
  })
})

app.use('/park', parkRoutes)
app.use('/trail', trailRoutes)
app.use('/trailhead', trailheadRoutes)
app.use('/gallery', galleryRoutes)


// The following 2 `app.use`'s MUST follow ALL your routes/middleware
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on http://0.0.0.0:' + port))
