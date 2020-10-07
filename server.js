if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') //create folder views
app.set('layout', 'layouts/layout')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(expressLayouts)
app.use(express.static('public')) //create folder public
app.use(express.static('public')) //create folder public
app.use('/', indexRouter)

app.listen(process.env.PORT || 8000)