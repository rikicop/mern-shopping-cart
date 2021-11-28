const express = require("express");
const router = express.Router();

//GET all products
//@access Public
router.get("/", (req, res) => {});

//GET a product
//@access Public
router.get("/:id", (req, res) => {});

module.exports = router;
