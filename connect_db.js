// Import Mongoose to manage MongoDB connections
const mongoose = require("mongoose");

// Define an asynchronous function to connect to the database
const connect_db = async () => {
    try {
        // Attempt to connect using the MongoDB URI from environment variables
        let resultat = await mongoose.connect(process.env.DB_URI);
        console.log("database is running"); // Log success message if connected
    } catch (error) {
        console.log(error); // Log any connection errors
    }
};

// Export the connection function so it can be used in other parts of the app
module.exports = connect_db;
