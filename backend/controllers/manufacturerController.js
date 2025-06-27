const { Manufacturer } = require("../models");

exports.getAllManufacturers = async (req, res, next) => {
  try {
    const Manufacturers = await Manufacturer.findAll();
    res.json(Manufacturers);
  } catch (err) {
    next(err);
  }
};

exports.getManufacturerById = async (req, res, next) => {
  try {
    const manufacturer = await Manufacturer.findByPk(req.params.id);
    if (!manufacturer)
      return res.status(404).json({ error: "Manufacturer cannot be found." });
    res.json(manufacturer);
  } catch (err) {
    next(err);
  }
};

exports.createManufacturer = async (req, res, next) => {
  try {
    const newManufacturer = await Manufacturer.create(req.body);
    res.status(201).json(newManufacturer);
  } catch (err) {
    next(err);
  }
};

exports.updateManufacturer = async (req, res, next) => {
  try {
    const manufacturer = await Manufacturer.findByPk(req.params.id);
    if (!manufacturer)
      return res.status(404).json({ error: "Manufacturer cannot be found." });
    await manufacturer.update(req.body);
    res.json(manufacturer);
  } catch (err) {
    next(err);
  }
};
