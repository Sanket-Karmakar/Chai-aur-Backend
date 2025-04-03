require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Sanket Karmakar!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login or Sign Up</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Chai aur Code - Hitesh Choudhary</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

