// In-built module
const path = require('path');

// 3rd party module
const express = require('express');

const directory = require("../utils/path");
const product = [];

//Express

const route = express.Router();
// -> /admin/add-prouct (GET Request)
route.get("/add-product", (req, res, next)=>{
  res.render("add-product", {pageTitle: "Add Products"})
})

// -> /admin/add-product (POST Request)
route.post("/add-product", (req, res, next)=>{
  product.push({title: req.body.title});
  res.redirect("/");
})

exports.routes = route;
exports.product = product;