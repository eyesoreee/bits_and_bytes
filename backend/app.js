require("dotenv").config();
const express = require("express");
const path = require("path");
const { sequelize } = require("./models");

const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const manufacturerRoute = require("./routes/manufacturerRoute");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/manufacturer", manufacturerRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong." });
});

const PORT = process.env.PORT || 5001;

startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
