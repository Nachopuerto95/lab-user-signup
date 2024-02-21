const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'E-mail is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6 
        }

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
