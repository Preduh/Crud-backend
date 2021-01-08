const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/home')(app)

app.listen(8081)