//In-built modules
const http = require('http');
const path = require("path");

//3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "pug");
app.set("views", "views");

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use("/admin", adminData.routes);
app.use(shopRoutes);


app.use((req, res, next)=>{
  res.status(404).render("not-found", {pageTitle: "Not Found Page"});
})

app.listen(3000);