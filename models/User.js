const mongoose = require("mongoose");

// User schema — stores registered users (both regular users and admins)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],   // Only these two values are allowed
        default: "user"            // New accounts are regular users by default
    }
});

module.exports = mongoose.model("User", userSchema);
