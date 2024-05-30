import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello Quang Minh')
})

app.listen(port, () => {
  console.log('Server listening on port 5000')
})
