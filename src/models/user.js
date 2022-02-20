const mongoose = require("mongoose");
const validator = require("validator");

//create model
const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age can not be nagitive");
            }
        },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email!");
            }
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("Password can not contain password");
            }
        },
    },
});

// //create an instance
// const me = new User({
//     name: " Mubeen  ",
//     age: 28,
//     email: "Mubeenarman@gmail.com",
//     password: "mubeenarman",
// });

module.exports = User;
