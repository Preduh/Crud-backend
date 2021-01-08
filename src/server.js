const cors = require('cors')
require('dotenv').config({ path: '.env' })
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/home')(app)

app.listen(process.env.PORT || '0.0.0.0')