const mongoose = require('../database/index')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User