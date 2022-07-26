const { Router } = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user/user-controller");
const rolesController = require("../controllers/roles/roles-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const rolesMiddleware = require("../middlewares/roles-middleware");
const router = new Router();

router.post(
  "/registration",
  body("email").isString().isEmail(),
  body("password").isString().isLength({ min: 4, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/roles", authMiddleware, rolesController.create);
router.get("/roles/:value/", authMiddleware, rolesController.getRoleByValue);
router.post("/roles/add", authMiddleware, userController.addRole);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refreshToken);
router.get("/users", rolesMiddleware(["user"]), userController.getUsers);

module.exports = router;
