const express = require('express')
const cors = require('cors');
const app = express()
const port = 8888
const pool = require('./database/connect')

app.use(express.json());
app.use(cors())

const authRoute = require('./routes/Auth.js')
const soleRoute = require('./routes/Sole.js')

app.use('/auth', authRoute)
app.use('/sole', soleRoute)

app.get('/', (req, res) => {
    res.send('its working')
    console.log('home')
})

app.listen(port, () => {
    console.log(`live on port ${port}`)
})