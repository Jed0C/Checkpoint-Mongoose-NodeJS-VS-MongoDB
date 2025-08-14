// Import Mongoose library for MongoDB interaction
const mongoose = require("mongoose");
const schema = mongoose.Schema; // Shortcut to define schema

// Define the structure of a User document
const userSchema = new schema({
    name: String,                 // User's first name
    lastname: String,            // User's last name
    age: Number,                 // User's age
    email: {                     // User's email (must be unique)
        type: String,
        unique: true
    },
    isAdmin: {                   // Flag to indicate if the user is an admin
        type: Boolean,
        default: false
    },
    img: String                  // Optional field for user's profile image URL or path
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other parts of the app
module.exports = User;
