const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);

module.exports = router;
