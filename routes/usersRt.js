const router = require("express").Router();
const users = require("../controllers/userCt");
const auth = require("../validators/validations")
router.get("/login", users.getLoginForm)
router.post("/login", users.sendLoginForm)
router.get("/register", users.getRegisterForm)
router.post("/register",  users.sendRegisterForm)
router.get("/logout", users.logout)
router.get("/settings",auth, users.settings)
router.get("/validate",auth, users.validate)
router.post("/sendSettings", auth, users.sendSettings)
router.get("/delete",auth, users.userdelete) 

module.exports = router;