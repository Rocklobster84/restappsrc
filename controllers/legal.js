const Legal = require('../models/legal');

module.exports = {

legalIndex: async function (req, res, next) {
  res.status(301).redirect('/legal/index.html');
},

legalNew: async function (req, res, next) {
  res.render("./not-public/legal/new")
},

legalCreate: async function (req, res, next) {
  Legal.create(req.body.legal, function(err, newLegal) {
    if(err) {
      console.log(err);
      res.redirect("/legal/edit");
    } else {
      res.redirect("/legal");
    }
  })
},

legalShow: async function (req, res, next) {
  let slug = req.params.slug;
  Legal.findOne({slug: slug}).exec(function (err, showLegal) {
    if (err) {
      console.log(err);
      res.redirect('/legal');
    } else {
      res.render("legal/index", { legal: showLegal});
    }
  });
},

  // Show page of edit buttons
  legalEdit: async function (req, res, next) {
    Legal.find({}).sort({_id:-1}).exec(function (err, allLegal){
      if(err) {
        res.redirect("/legal");
      } else {
        res.render("./not-public/legal/edit", {
          legal: allLegal
        });
      }
    });
  },

  // Show form for Editing
  legalEditForm: async function (req, res, next) {
    Legal.findById(req.params.id, function(err, foundLegal) {
      if(err) {
        res.redirect('/legal/page/edit');
      } else {
        res.render('./not-public/legal/edit-form', { legal: foundLegal});
      }
    });
  },

  // Update Route
  legalUpdate: async function (req, res, next) {
    Legal.findByIdAndUpdate(req.params.id, req.body.legal, function(err, updatedLegal) {
      if(err) {
        res.redirect('/legal/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/legal/page/edit');
      }
    });
  },

  // Destroy Route
  legalDestroy: async function (req, res, next) {
    Legal.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/legal/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/legal/page/edit");
      }
    });
  }

}; // closes module exports
