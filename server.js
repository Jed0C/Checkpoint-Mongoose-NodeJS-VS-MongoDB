// Import required modules
const express = require("express");

// Initialize the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Load environment variables from the .env file into process.env
require("dotenv").config();

// Connect to the database
const connect_db = require("./connect_db");
connect_db();

// Define routes/endpoints for user-related operations
app.use("/user", require("./Routes/user"));

// Start the server on the port defined in the .env file
// Log an error if one occurs, otherwise confirm the server is running
app.listen(process.env.PORT, (err) => 
  err ? console.log(err) : console.log("server is running on port 5000")
);
