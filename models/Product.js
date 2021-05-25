// const { ObjectId } = require("bson");
const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book title required."],
    },
    price: {
      type: Number,
      trim: true,
      required: [true, "Book price required."],
    },
    quantity: {
      type: Number,
      trim: true,
      required: [true, "Quantity in stock required"],
    },
    description: {
      type: String,
      required: [true, "Book description required."],
    },
    image: {
      type: JSON,
      required: [true, "Please upload book cover."],
    },
    education: {
      type: String,
      enum: [
        "Preschool",
        "Primary",
        "Junior High School",
        "Senior High School",
        "Other",
      ],
      required: [true, "All fields required"],
    },
    topic: {
      type: String,
      enum: [
        "Children",
        "Story Books",
        "Technology",
        "Programming",
        "Health",
        "Science",
        "Business",
        "Inspirational",
        "Other",
      ],
      required: [true, "Please select one topic for the book."],
    },
    // adminId: {
    //   type: Schema.ObjectId,
    // },

    numberOfWish: [
      {
        type: Number,
        default: 0,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
