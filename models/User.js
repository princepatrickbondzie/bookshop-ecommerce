// import { model, Schema } from "mongoose";
const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    category: {
      type: String,
      enum: ["Student", "Parent", "Other"],
      required: [true, "Please all fields are required."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    role: {
      type: String,
      default: "User",
      enum: ["user", "merchant", "admin"],
    },
    accessToken: {
      type: String,
    },
    cart: {
      type: Array,
      default: [],
    },
  },
  { timestamp: true }
);
module.export = model("User", userSchema);
