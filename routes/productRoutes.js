// const express = require("express");
const router = require("express").Router();
// const router = require("express").Router();
// import * as productController from "../controllers/productController";
const productController = require("../controllers/productController")
const { verifyToken } = require("../controllers/authController");


router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProduct);
router.post("/",  productController.createProduct);
router.patch("/:id", verifyToken, productController.updateProduct);
router.delete("/:id", verifyToken, productController.deleteProduct);

module.exports = router;
