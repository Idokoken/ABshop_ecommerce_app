const express = require("express");
const Products = require("../models/productModel");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const keys = require("../config/keys");

const productRouter = express.Router();

//create product
productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProducts = new Products(req.body);
  try {
    const product = await newProducts.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update product
productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      keys.PASS_SEC
    ).toString();
  }
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json("error updating product");
  }
});
// delete call
productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted");
  } catch (err) {
    res.status(500).json("error updating product");
  }
});

//get call
productRouter.get("/find/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json("you are not an admin");
  }
});

//get all
productRouter.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let product;
    if (qNew) {
      product = await Products.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      product = await Products.find({ categories: { $in: [qCategory] } });
    } else {
      product = await Products.find();
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json("you are not an admin");
  }
});

module.exports = productRouter;
