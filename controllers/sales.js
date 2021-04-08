const Sales = require('../models/sales');

module.exports = {

salesIndex: async function (req, res, next) {
  res.status(301).redirect('/sales/index.html');
},

salesNew: async function (req, res, next) {
  res.render("./not-public/sales/new")
},

salesCreate: async function (req, res, next) {
  Sales.create(req.body.sales, function(err, newSales) {
    if(err) {
      console.log(err);
      res.redirect("/sales/edit");
    } else {
      res.redirect("/sales");
    }
  })
},

salesShow: async function (req, res, next) {
  let slug = req.params.slug;
  Sales.findOne({slug: slug}).exec(function (err, showSales) {
    if (err) {
      console.log(err);
      res.redirect('/sales');
    } else {
      res.render("sales/index", { sales: showSales});
    }
  });
},

  // Show page of edit buttons
  salesEdit: async function (req, res, next) {
    Sales.find({}).sort({_id:-1}).exec(function (err, allSales){
      if(err) {
        res.redirect("/sales");
      } else {
        res.render("./not-public/sales/edit", {
          sales: allSales
        });
      }
    });
  },

  // Show form for Editing
  salesEditForm: async function (req, res, next) {
    Sales.findById(req.params.id, function(err, foundSales) {
      if(err) {
        res.redirect('/sales/page/edit');
      } else {
        res.render('./not-public/sales/edit-form', { sales: foundSales});
      }
    });
  },

  // Update Route
  salesUpdate: async function (req, res, next) {
    Sales.findByIdAndUpdate(req.params.id, req.body.sales, function(err, updatedSales) {
      if(err) {
        res.redirect('/sales/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/sales/page/edit');
      }
    });
  },

  // Destroy Route
  salesDestroy: async function (req, res, next) {
    Sales.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/sales/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/sales/page/edit");
      }
    });
  }

}; // closes module exports
