const express = require('express');
const app = express();
const cors = require('cors');
const studentRouter = require('./routes/studentRoute');
const sponsorRouter = require('./routes/sponsorRoute');

const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/student', studentRouter);
app.use('/sponsor', sponsorRouter);

app.get('/', (req, res) => {
  res.send('Serendib WS is active');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});