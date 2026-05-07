const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Home Route')
})

app.get('/about', (req, res) => {
  res.send('About Route')
})

app.get('/contact', (req, res) => {
  res.send('Contact Route')
})

app.post('/login', (req, res) => {
  res.send('Login Successful')
})

app.listen(3000, () => {
  console.log('Server Running')
})