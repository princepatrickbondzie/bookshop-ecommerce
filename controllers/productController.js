const Product = require("../models/Product");
const { cloudinary } = require("../utils/cloudinary");
// const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const upload = require("../utils/file-upload");
const fs = require("fs");

const getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};



const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = await Product.findById(id);
  res.status(200).json({ product });
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, image: req.file.path });
    // add pd to user
    // const user = await User.findById(userId);
    // user.products.push(product._id);
    // await user.save();
    // return pd
    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });
  res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(200).json({ message: "Post Deleted Successfully" });
};

module.exports = {
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
