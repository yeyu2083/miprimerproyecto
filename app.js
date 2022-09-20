const express = require("express");

const PORT = 3000
const app = express()

const hbs = require("express-handlebars");

app.engine('hbs', hbs.engine( { extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');





app.use(express.static("public"))



app.get("/", (req, res) => {
    res.render("home")
});
app.get("/about", (req, res) => {
   res.render("about")
})
app.get("/contact", (req, res) => {
    res.render("contact")

})
app.get("/interiores", (req, res) => {
    res.render("interiores")
})

app.listen(PORT, (err) => {
    err? console.log((`Error:${err}`))
    :
    console.log(`Server running on http:localhost${PORT}`);
})
