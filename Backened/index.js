const connectToMongo=require('./db');
const express = require('express')
const app = express();

connectToMongo();
const port = 5000;   

app.get('/', (req, res) => {
  res.send('Hello Bolt  !')
})

//middleware to get req body
app.use(express.json())


//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
