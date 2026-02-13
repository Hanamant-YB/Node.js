const express = require('express');
const app = express();
const db = require('./db.js');
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




app.listen(3000, () => {
  console.log('Server is running on port:3000')
})