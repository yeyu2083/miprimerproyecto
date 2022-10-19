const express = require("express")
const router = express.Router()
const users = require("../controllers/userCt");
const auth = require("../config/mongo")
/* const  validationRules = require("../validators/validations.js")    */

router.get("/contact", users.mailMessage)
/* router.post("/contact",validationRules, users.validateEmail)  */
router.get("/login", users.getLoginForm)
router.post("/login", users.sendLoginForm)
router.get("/register", users.getRegisterForm)
router.post("/register", users.sendRegisterForm)
router.get("/logout", users.logout)
router.get("/settings",auth, users.settings)
router.post("/sendSettings", auth, users.sendSettings)
router.get("/delete",auth, users.userdelete) 

module.exports =  router ;