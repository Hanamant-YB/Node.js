// const converToObject = '{"name": "abhi","age":24}';
// const jsonObject = JSON.parse(converToObject);
// console.log(jsonObject.age);
// console.log(jsonObject.name);

// const converToJson = {name:'hanamant',age:24};
// const JsonStringfy = JSON.stringify(converToJson);
// console.log(JsonStringfy);
// import express from 'express'
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/chicken', (req, res) => {
  res.send('yes i will serve u chicken');
})

app.get('/dosa', (req, res) => {
  res.send('yes i will serve u dosa');
})

app.get('/pori', (req, res) => {
    const customized = {
        name:'single pori',
        size:2+'pices',
        chutney:true
    }
  res.send(customized);
})

app.post('/items',(req,res)=>{
    res.send('data is saved');
})


app.listen(3000, () => {
  console.log('Server is running on port:3000')
})