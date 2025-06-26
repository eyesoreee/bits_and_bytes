require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong." });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
