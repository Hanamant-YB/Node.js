const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected',() => {
    console.log('connected to MongoDB ');
})

db.on('disconnected',() => {
    console.log('disconnected');
})

db.on('error',(err) => {
    console.log('mongodb connection errors:',err);
})
module.exports = db;