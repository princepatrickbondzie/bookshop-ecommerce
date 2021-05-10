const User = require("../models/User");
const role = require("../role");

const grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action"
        });
      }
      next()
    } catch (error) {
      next(error)
    }
  };
};
 
const allowIfLoggedin = async (req, res, next) => {
  try {
    const user = res.locals.loggedInUser;
    if (!user)
      return res.status(401).json({
        error: "You need to be logged in to access this route"
      });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  };
};

const getAllUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ user });
};

const getSingleUser = async (req, res) => {
  if (!req.user) {
    return res.status(401);
  }
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = { grantAccess, allowIfLoggedin, getAllUsers, getSingleUser, updateUser, deleteUser };
