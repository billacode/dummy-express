const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000

app.use(cors());
app.use(express.json());

let studentArr = [];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/student', (req, res) => {
    res.json({message: studentArr})
})

app.post('/student', (req, res) => {
  studentArr.push(req.body);
  console.log(req.body)
  console.log(studentArr)
  res.send('sucess')
})

app.get('/sponsor', (req, res) => {
  res.json({message: [{id: '1111', name: 'geetha'}]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})