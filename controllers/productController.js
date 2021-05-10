const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

const getProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).json({ product });
};

const createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body);
    //add pd to user
    // const user = await User.findById(userId);
    // user.products.push(product._id);
    // await user.save();
    // //return pd
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
