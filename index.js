const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    const weather = {
        temp: between(-40,40),
        clouds: between(1, 2) > 1 ? 'heavy': 'light',
        pressure: between(120, 150),
    }
    res.send(weather)
})

const between = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})