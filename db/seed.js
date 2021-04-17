//Import The Database Connection
const mongoose = require("./connection");

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////

///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  // Drop the Database before seeding
  mongoose.connection.db.dropDatabase();

  mongoose.disconnect();
};

// Wait for the DB Connection to be Established
mongoose.connection.on("open", () => {
  // Run Seed Function
  seed();
});
