const express = require('express')
const router = express.Router()
const pool = require('../database/connect.js')
const bcrypt = require('bcrypt')


//---AUTH---
//recieve login
router.post('/login', async (req, res) => {
    if (!req) { return res.status(400) }

    const { name, password } = req.body

    try {
        const data = await pool.query(`SELECT * FROM userss WHERE user_name = $1 `, [name])
        if (data.rows.length === 0) {
            res.sendStatus(400)
        }

        // unhashing password and checking
        const isMatch = await bcrypt.compare(password, data.rows[0].password)

        if (isMatch) {
            res.send(data.rows)
            // console.log('working')
        } else {
            res.sendStatus(400)
            // console.log('error')
        }

    } catch (err) {
        console.log(err)
    }
})

// add last login date 
router.put('/login/date', async (req, res) => {
    const id = req.body[0].user_id
    date = new Date()
    console.log(id)
    try {
        const data = pool.query('UPDATE userss SET last_login_date = $2 WHERE user_id = $1', [id, date])
        console.log(data)

    } catch (err) {
        console.log(err)
    }


})

//recieve signup
router.post('/signup', async (req, res) => {
    if (!req) { return res.status(400) }

    // res.send('got signup')

    const { name, password, email } = req.body
    const hashPass = await bcrypt.hash(password, 10)
    // console.log(req.bodSy)
    const created = new Date()

    try {
        // const data = await pool.query('INSERT INTO users (name, email, password, created) VALUES ($1, $2, $3, $4)', [name, email, password, created])
        const data = await pool.query('INSERT INTO userss (user_name, password, email, registration_date,last_login_date) VALUES ($1, $2, $3, $4, $4)', [name, hashPass, email, created])
        // res.sendStatus(200)
        res.send(data.rows)
        // console.log(data)
    } catch (err) {
        console.log(err)
    }
})
//---AUTH---

module.exports = router