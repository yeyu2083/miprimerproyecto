const securePass = require("../helpers/securePass");
const User = require("../schemas/userSchemas")

function getLoginForm(req, res, next) {
    res.render("usersLogin")

};

 async function sendLoginForm(req, res, next) {
         const { email, pass} = req.body;
         const user = await User.find().where({ email })
         if(!user.length) {
            return res.render("usersLogin", { message: "Usuario o contraseña incorrecto" })
         };
       if  (await securePass.decrypt(pass, user[0].password )) {
        const usr = {
            id: user[0]._id,
            name: user[0].name,
            lastName: user[0].lastName
        }
         req.session.user = usr
         res.render("secret", { user: `${req.session.user.name} ${req.session.user.lastName}`, id: req.session.user.id })
        } else return res.render("usersLogin", { message: "Usuario o contraseña incorrecto" })
    
 };


function getRegisterForm(req, res, next) {
    res.render("registerUser")

};

async function sendRegisterForm(req, res, next) {
    const {name, lastName, email, pass} = req.body 
    const password = await securePass.encrypt(pass)


const newUser = new User({
    name, lastName, email, password
})
 
    
newUser.save((err) => {
    if(!err) {
        req.session.user = `${name} ${lastName} `
        res.render("secret", {user: req.session.user})
       
    }else {
      res.render("registerUser", { message: "Ya existe ese registro"})
    }
})
};
async function settings(req, res) {

    const user = await User.findById(req.session.user.id).lean()
res.render("editFormUsers", { user })
    
};

async function sendSettings(req, res) {
    try {
    await User.findByIdAndUpdate(req.session.user.id, req.body)
    res.redirect("/secret")
        
    } catch (err) {
    res.render("editFormUsers", { message: " Ocurrio un error intente nuevamente"})
        
    } 

};
async function userdelete(req, res) {
   try {
       await User.findByIdAndDelete(req.session.user.id)
       req.session.destroy()
       res.redirect("/")
    
   } catch (err) {

      res.render("editFormUsers", { message: " Ocurrio un error intente nuevamente"})
    
   }

};




async function validate(req, res) {
    res.render("verificacion en data base")

};

function logout(req, res) {
    req.session.destroy()
    res.redirect("/")
}
module.exports = { getLoginForm, sendLoginForm, getRegisterForm, sendRegisterForm, sendSettings,  logout, settings, validate, userdelete }

