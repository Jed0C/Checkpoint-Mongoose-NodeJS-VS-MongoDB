// Import required modules
const express = require("express");
const User = require("../models/user"); // Import the User model (Mongoose schema)

// Create a new Express router instance for user routes
const userRouter = express.Router();


// Route: Add a new user
// Method: POST /user/add
// Description: Receives user data in the request body, creates a new user, and saves it to the database
userRouter.post("/add", async (req, res) => {
    try {
        let newuser = new User(req.body);         // Create a new User instance from request body
        let result = await newuser.save();        // Save the user to the database
        res.send({ user: result, msg: "user is added" });  // Send success response
    } catch (error) {
        console.log(error); // Log any errors
    }
});


// Route: Get all users
// Method: GET /user/
// Description: Retrieves and returns all users from the database
userRouter.get("/", async (req, res) => {
    try {
        let result = await User.find();           // Fetch all users
        res.send({ users: result, msg: "all users" });  // Send response with list of users
    } catch (error) {
        console.log(error);
    }
});


// Route: Get a single user by ID
// Method: GET /user/:id
// Description: Retrieves one user based on their ID
userRouter.get("/:id", async (req, res) => {
    try {
        let result = await User.findById(req.params.id);  // Find user by ID
        res.send({ user: result, msg: "one user" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Delete a user by ID
// Method: DELETE /user/:id
// Description: Deletes a user based on their ID
userRouter.delete("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);  // Delete user by ID
        res.send({ msg: "user is deleted" });
    } catch (error) {
        console.log(error);
    }
});


// Route: Update a user by ID
// Method: PUT /user/:id
// Description: Updates a user's data based on their ID and request body
userRouter.put("/:id", async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate(
            { _id: req.params.id },               // Find user by ID
            { $set: { ...req.body } }             // Update user with new data
        );
        res.send({ msg: "user is updated" });
    } catch (error) {
        console.log(error);
    }
});


// Export the user router to be used in other parts of the app
module.exports = userRouter;
