const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.DB_URL;
// const mongoURL = 'mongodb+srv://hanamantyb:hanamant@cluster0.pphkya0.mongodb.net/'
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