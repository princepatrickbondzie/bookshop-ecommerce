const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    category,
    role,
    password,
  } = req.body;

  if (!firstName || !lastName || !email || !address || !category || !password) {
    res.status(400).json({ message: "Please enter all fields" });
    return;
  }

  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    res.status(400).json({ message: "Email already exist." });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    firstName,
    lastName,
    email,
    row,
    role: role || "User",
    password: hashedPassword,
  });

  user.accessToken = accessToken;
  await user.save();
  res.json({
    data: user,
    accessToken,
  });
  res.status(201).json({ user });
};

//-----LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  let user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "Invalid credentials" });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: "Invalide credentials" });
    return;
  }

  const token = jwt.sign({ id: user._id }, "123456789", { expiresIn: "1h" });
  res.status(200).json({ token });
};

//TOKEN
const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"] || "";

  token = token.split(" ")[1];
  if (token) {
    const decodedToken = jwt.verify(token, "123456789");
    req.user = decodedToken.id;
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

// ADDTOCART
const addCart = async (req, res) => {
    try {
      const user = await Users.findById(req.user.id);
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          cart: req.body.cart,
        }
      );

      return res.json({ msg: "Added to cart" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // LOGOUT
  logout = async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };

module.exports = { register, login, verifyToken, logout, addCart };
