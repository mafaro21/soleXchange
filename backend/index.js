const express = require('express')
const cors = require('cors');
const app = express()
const port = 8888
const pool = require('./database/connect')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('its working')
    console.log('home')
})

//---AUTH---
//recieve login
app.post('/auth/login', async (req, res) => {
    if (!req) { return res.status(400) }

    const { name, password } = req.body
    // console.log(req.body)

    try {
        const data = await pool.query(`SELECT * FROM users WHERE name = $1 AND password = $2`, [name, password])
        // console.log(data.rows.data)
        res.send(data.rows)
    } catch (err) {
        console.log(err)
    }
})

//recieve signup
app.post('/auth/signup', async (req, res) => {
    if (!req) { return res.status(400) }

    // res.send('got signup')

    const { name, password, email } = req.body
    // console.log(req.bodSy)
    const created = new Date()

    try {
        const data = await pool.query('INSERT INTO users (name, email, password, created) VALUES ($1, $2, $3, $4)', [name, email, password, created])
        res.send(data.rows)
        // console.log(data.rows)
    } catch (err) {
        console.log(err)
    }
})
//---AUTH---


// --ADD SHOE--
app.post('/sole/add', async (req, res) => {
    if (!req) { return res.status(400) }

    const { name, brand, price, gender } = req.body

    const added = new Date()

    // console.log(req.body)

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
app.get('/sole/search', async (req, res) => {
    if (!req) { return res.status(400) }

    // const search = req.body
    const search = 'Nike'

    console.log(req.body)

    try {
        const data = await pool.query(`SELECT * FROM shoes WHERE CONTAINS ($1)`, ['Ni'])
        res.send(data.rows)
        console.log(data.rows)

    } catch (err) {
        console.log(err)

    }
})
// -----SEARCH SHOE------

app.listen(port, () => {
    console.log(`live on port ${port}`)
})