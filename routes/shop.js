// In-built module
const path = require('path');

// 3rd party module
const express = require('express');
const routes = express.Router();
const directory = require("../utils/path");
const adminData = require("../routes/admin");

routes.get("/", (req, res)=> {
  // res.sendFile(path.join(directory, "views", "shop.html"))
  const product = adminData.product;
res.render("shop", { prod: product, pageTitle: "Shop", path: "/" });
})
module.exports= routes;