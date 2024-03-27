const express = require('express')
const cors = require('cors');
const app = express()
const port = 8888

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('its working')
    console.log('home')
})

//---AUTH---
//recieve login
app.post('/auth/login', (req, res) => {
    if (!req) { return res.sendStatus(400) }

    console.log(req.body)
    res.send('got login')
})

//recieve signup
app.post('/auth/signup', (req, res) => {
    if (!req) { return res.sendStatus(400) }

    console.log(req.body)
    res.send('got signup')
})
//---AUTH---

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})