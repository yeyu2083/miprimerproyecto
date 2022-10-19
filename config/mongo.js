require("dotenv").config()

//mongo atlas connect
const mongoose = require("mongoose");
const URI = process.env.uridb
mongoose.connect(URI, (err) => {
    err? console.log("\033[31m " + err) : console.log("\033[32m 'mongo atlas'");
})


 
  // middleware para renderizar la session secreta, solo usuarios logueados
const auth = (req, res, next) => {
  if(req.session.user) {
    next()
  }else res.render("noAuth")
 }

  module.exports =   auth ;