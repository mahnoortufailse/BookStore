import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create a model from the schema

const User = mongoose.model("User", userSchema);

export default User;

// In your signup route, before saving the user to the database, hash the password using bcryptjs