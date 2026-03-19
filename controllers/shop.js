const Product = require("../models/product");
// exports.getAddProduct = (req, res, next) => {
//   res.render('admin/add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true
//   });
// }


// exports.postAddProduct = (req, res, next) => {
//   const product = new Product(req.body.title);
//   product.save();
//   res.redirect('/');
// }

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products)=>{
    res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products',
  });
  });
  
}

exports.getProductById = (req, res, next)=>{
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    console.log(product, "PRODUCT RESULT")
  })
  res.redirect("/");
}

exports.getIndex = (req, res, next)=>{
    Product.fetchAll((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    });
}

exports.getCart = (req, res, next) =>{
    res.render("shop/cart", {
        path:"/cart",
        pageTitle: "Your Cart"
    })
}

exports.getCheckout = (req, res, next) =>{
    res.render("shop/checkout", {
        path:"/checkout",
        pageTitle: "Checkout"
    })
}

exports.getOrders = (req, res, next)=>{
  res.render("shop/orders", {
    path:"/orders",
    pageTitle:"Orders"
  })
}