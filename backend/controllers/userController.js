const { User } = require("../models");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create(name, email);
    req.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.param.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.update(user.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
