const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fname: { type: String, required: [true, "Please enter firstname."] },
    lname: { type: String, required: [true, "Please enter firstname."] },
    email: {
      type: String,
      required: [true, "Please enter email."],
      validate: {
        validator: (value) => {
          return /^[a-zA-Z]+([\.-]?\w+)*@(hotmail|outlook|gmail)\.(com|net|ma)/.test(value);
        },
        message: props => "Please enter valid email !"
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password."],
      minLength: [8, "Password is too short."],
    },
    img: { type: String },
  },
  { collection: "User" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
