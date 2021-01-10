const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' })

mongoose.connect('mongodb+srv://deploy:deployregister@cluster0.hksoi.mongodb.net/register?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

module.exports = mongoose