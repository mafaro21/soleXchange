const express = require('express')
const router = express.Router()
const pool = require('../database/connect')


// --ADD SHOE--
router.post('/add', async (req, res) => {
    if (!req) { return res.status(400) }

    const { name, brand, price, gender } = req.body

    const added = new Date()

    console.log(req.body)

    try {
        const data = await pool.query('INSERT INTO shoes (name, brand, price, gender, added) VALUES ($1, $2, $3, $4, $5)', [name, brand, price, gender, added])
        res.send(data.rows)
        // console.log(data.rows)
    } catch (err) {
        console.log(err)
    }
})
// --ADD SHOE--

// -----SEARCH SHOE------
router.get('/search', async (req, res) => {
    if (!req) { return res.status(400) }

    // const search = req.body
    const search = 'Nike'

    console.log(req.body)

    try {
        const data = await pool.query('SELECT * FROM shoes WHERE LIKE $1', [`%${search}%`])
        res.send(data.rows)
        console.log(data.rows)

    } catch (err) {
        console.log(err)

    }
})
// -----SEARCH SHOE------

module.exports = router