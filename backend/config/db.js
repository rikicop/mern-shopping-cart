require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Conectado:  ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Failed:  ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
