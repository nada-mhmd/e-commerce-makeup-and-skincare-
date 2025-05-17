/*const mongoose = require('mongoose');

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MongoDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  }
   catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDB;
*/

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBUrl, {
      dbName: 'care', // ← اسم الداتابيز اللي عايز توصلها
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
};

module.exports = connectDB;
