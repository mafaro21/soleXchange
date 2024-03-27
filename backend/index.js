const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => {
    res.send('its working')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})