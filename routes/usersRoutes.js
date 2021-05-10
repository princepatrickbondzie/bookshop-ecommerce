const router = require("express").Router();
const userController = require("../Controllers/userController");
const { verifyToken } = require("../Controllers/authController");

router.get(
  "/",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  userController.getAllUsers
);

router.get(
  "/:id",
  verifyToken,
  userController.allowIfLoggedin,
  userController.getSingleUser
);
router.patch(
  "/:id",
  verifyToken,
  userController.allowIfLoggedin,
  userController.grantAccess("updateAny", "profile"),
  userController.updateUser
);
router.delete(
  "/:id",
  verifyToken,
  userController.allowIfLoggedin,
  userController.grantAccess("deleteAny", "profile"),
  userController.deleteUser
);

module.exports = router;
