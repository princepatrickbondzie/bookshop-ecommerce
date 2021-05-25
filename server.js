require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
// const fileUpload = require("express-fileupload");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const usersRoutes = require("./routes/usersRoutes");

require("./config/dbConnect");
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/users", usersRoutes);

app.all("*", (req, res, next) => {
  res
    .status(404)
    .json({ message: `Cannot find ${req.originalUrl} on the server` });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
});

app.listen(PORT, () => console.log("Covering the nations book hole...."));
