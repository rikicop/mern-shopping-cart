const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//GET all products
//@access Public
router.get("/", getAllProducts);

//GET a product
//@access Public
router.get("/:id", getProductById);

module.exports = router;
