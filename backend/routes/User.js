const express = require('express')
const router = express.Router()
const pool = require('../database/connect')

router.get('/profile', async (req, res) => {
    if (!req) { return res.status(400) }

    const { q } = req.query

    try {
        const data = await pool.query("SELECT * FROM userss WHERE user_name = $1", [q])
        res.send(data.rows)
        console.log(data.rows)

    } catch (err) {
        console.log(err)

    }

})

module.exports = router