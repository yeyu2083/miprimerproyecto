require("./config/mongo")
const session = require("express-session")
const path = require("path");
const express = require("express");
const auth = require("./validators/validations")
const PORT = 3000
const app = express()

const hbs = require("express-handlebars");

app.use(session({
    secret:process.env.SESSION_PRIVATE,
    resave:true,
    saveUninitialized: false

}))

app.engine('hbs', hbs.engine( { extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,"/views"));


app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.render("home", { user: req.session.user })

    
});
app.get("/about", (req, res) => {
   res.render("about")
})

app.get("/interiores", (req, res) => {
    res.render("interiores")
})

app.get("/secret", auth ,(req, res) => {
    res.render("secret", { user: `${req.session.user.name} ${req.session.user.lastName}`, id: req.session.user.id })
})
        
  
app.get("/noAuth", (req, res)=>{
    res.render("noAuth")
})
 app.use("/users", require("./routes/usersRt"))

app.listen(PORT, (err) => {
    err? console.log((`Error:${err}`))
    :
    console.log(`Server running on http:localhost${PORT}`);
})
