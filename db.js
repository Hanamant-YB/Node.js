const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log(" ✅ Connected to MongoDB");
});

db.on("disconnected", () => {
  console.log(" ❌ MongoDB disconnected");
});

db.on("error", (err) => {
  console.log(" 🚫error MongoDB connection error:", err);
});

module.exports = db;
