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
    },
    atCreated: {
        type: Date
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User