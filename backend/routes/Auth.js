const express = require('express')
const router = express.Router()
const pool = require('../database/connect.js')


//---AUTH---
//recieve login
router.post('/login', async (req, res) => {
    if (!req) { return res.status(400) }

    const { name, password } = req.body
    // console.log(req.body)

    try {
        const data = await pool.query(`SELECT * FROM users WHERE name = $1 AND password = $2`, [name, password])
        console.log(data.rows)
        res.send(data.rows)

    } catch (err) {
        console.log(err)
    }
})

// add last login date 
router.put('login/date', async (req, res) => {
    console.log(req.body)

    //query db to insert date
})

//recieve signup
router.post('/signup', async (req, res) => {
    if (!req) { return res.status(400) }

    // res.send('got signup')

    const { name, password, email } = req.body
    // console.log(req.bodSy)
    const created = new Date()

    try {
        // const data = await pool.query('INSERT INTO users (name, email, password, created) VALUES ($1, $2, $3, $4)', [name, email, password, created])
        const data = await pool.query('INSERT INTO userss (user_name, password, email, registration_date,last_login_date) VALUES ($1, $2, $3, $4, $4)', [name, password, email, created])
        // res.sendStatus(200)
        res.send(data.rows)
        // console.log(data)
    } catch (err) {
        console.log(err)
    }
})
//---AUTH---

module.exports = router