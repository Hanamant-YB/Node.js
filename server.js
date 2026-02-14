const express = require('express');
const app = express();
const db = require('./db.js');
require('dotenv').config()
//
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log('welcome to the hotel');
    res.send('welcome to the hotel');
})

const menuRouter = require('./routes/menuRoutes');
const personRoutes = require('./routes/personRoutes');


app.use('/menu', menuRouter);
app.use('/person',personRoutes);



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server is running on port:3000')
})