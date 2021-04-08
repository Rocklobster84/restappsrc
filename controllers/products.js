const Products = require('../models/products');

module.exports = {

productsIndex: async function (req, res, next) {
  res.status(301).redirect('/products/index.html');
},

productsNew: async function (req, res, next) {
  res.render("./not-public/products/new")
},

productsCreate: async function (req, res, next) {
  Products.create(req.body.products, function(err, newProducts) {
    if(err) {
      console.log(err);
      res.redirect("/products/edit");
    } else {
      res.redirect("/products");
    }
  })
},

productsShow: async function (req, res, next) {
  let slug = req.params.slug;
  Products.findOne({slug: slug}).exec(function (err, showProducts) {
    if (err) {
      console.log(err);
      res.redirect('/products');
    } else {
      res.render("products/index", { products: showProducts});
    }
  });
},

  // Show page of edit buttons
  productsEdit: async function (req, res, next) {
    Products.find({}).sort({_id:-1}).exec(function (err, allProducts){
      if(err) {
        res.redirect("/products");
      } else {
        res.render("./not-public/products/edit", {
          products: allProducts
        });
      }
    });
  },

  // Show form for Editing
  productsEditForm: async function (req, res, next) {
    Products.findById(req.params.id, function(err, foundProducts) {
      if(err) {
        res.redirect('/products/page/edit');
      } else {
        res.render('./not-public/products/edit-form', { products: foundProducts});
      }
    });
  },

  // Update Route
  productsUpdate: async function (req, res, next) {
    Products.findByIdAndUpdate(req.params.id, req.body.products, function(err, updatedProducts) {
      if(err) {
        res.redirect('/products/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/products/page/edit');
      }
    });
  },

  // Destroy Route
  productsDestroy: async function (req, res, next) {
    Products.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/products/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/products/page/edit");
      }
    });
  }

}; // closes module exports
