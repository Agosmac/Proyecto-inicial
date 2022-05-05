const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mainRouter = require("./routes/mainRouter");

app.set("view engine", "ejs");

app.use(express.static(path.join("../public")));

app.use(express.urlencoded({extended:true})); // coloqué true ya que con false, ademas del objeto sumaba un [Object: null prototype] 
app.use(express.json());

app.use(methodOverride("_method"));

app.use("/", mainRouter);

app.use((req, res, next) =>{ 
    res.status(404).render("not-found");
});

app.listen(3000, () =>{
    console.log("Servidor funcionando en el puerto 3000");
});

