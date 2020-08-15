const express = require('express');
const bodyParser = require('body-parser')
const connection = require('./config/database')
const app = express()


const userRouter = require('./routers/users')
const moviesRouter = require('./routers/movies')
const historyRouter = require('./routers/history_watch')
const subscriptionRouter= require('./routers/subscriptions')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// connection database - mysql
connection.connect(err =>{
  if(err) {
    console.log('error connecting')
  }
  console.log('connected')
})

app.get('/', (req, res) => {
  res.send('welcome')
})
app.use('/', userRouter)
app.use('/', moviesRouter)
app.use('/', subscriptionRouter)
app.use('/', historyRouter)

app.listen(4000, () => {
  console.log('server berjalan')
})