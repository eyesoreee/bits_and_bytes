const { Product, Category, Manufacturer } = require("../models/");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category, as: "category" },
        { model: Manufacturer, as: "manufacturer" },
      ],
      attributes: {
        exclude: ["categoryId", "manufacturerId"],
      },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        { model: Category, as: "category" },
        { model: Manufacturer, as: "manufacturer" },
      ],
      attributes: {
        exclude: ["categoryId", "manufacturerId"],
      },
    });

    if (!product)
      return res.status(404).json({ error: "Product cannot be found." });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product cannot be found." });
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
