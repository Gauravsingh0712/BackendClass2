const mongoose = require("mongoose");

require("dotenv").config();

//this function establish the connection b/w the server and the database
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.error(
        "Received an error during database connection:",
        error.message
      );
      //iska matlab kya hai?
      process.exit(1);
    });
};

module.exports = dbConnect;
