const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const usersRoutes = require("./routes/usersRoutes");

require("./config/dbConnect");

const app = express();
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  }));
app.use(express.json());

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

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(async (req, res, next) => {
//   if (req.headers["x-access-token"]) {
//     const accessToken = req.headers["x-access-token"];
//     const { userId, exp } = await jwt.verify(
//       accessToken,
//       process.env.JWT_SECRET
//     );
//     // Check if token has expired
//     if (exp < Date.now().valueOf() / 1000) {
//       return res
//         .status(401)
//         .json({
//           error: "JWT token has expired, please login to obtain a new one",
//         });
//     }
//     res.locals.loggedInUser = await User.findById(userId);
//     next();
//   } else {
//     next();
//   }
// });

app.listen(4000, () => console.log("Covering the nations book hole...."));
