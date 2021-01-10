const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/register', async (req, res) => { // Create
    try {
        const user = await User.create(req.body)

        return res.redirect('https://register-mongoose-frontend.herokuapp.com')
    } catch (err) {
        console.error(err)
    }
})

router.get('/users', async (req, res) => { // Read
    try {
        const users = await User.find()
        
        return res.json(users)
        
    } catch (err) {
        console.error(err)
    }
})

router.post('/updateUser/:id', async (req, res) => { // Update
    try {
        const updateUser = await User.updateOne({ "_id": req.params.id }, req.body)

        return res.json(await User.find())
    } catch (err) {
        console.error(err)
    }
})

router.post('/deleteUser/:id', async (req, res) => { // Delete
    try {
        const user = await User.findById(req.params.id)
        await User.deleteOne({ "_id": req.params.id })

        return res.json(user)
    } catch (err) {
        console.error(err)
    }
})

module.exports = app => app.use(router)