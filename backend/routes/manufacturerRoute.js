const express = require("express");
const {
  getAllManufacturers,
  getManufacturerById,
  createManufacturer,
  updateManufacturer,
} = require("../controllers/manufacturerController");
const router = express.Router();

router.get("/", getAllManufacturers);
router.get("/:id", getManufacturerById);
router.post("/", createManufacturer);
router.put("/:id", updateManufacturer);

module.exports = router;
