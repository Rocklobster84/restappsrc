const Branding = require('../models/branding');

module.exports = {

brandingIndex: async function (req, res, next) {
  res.status(301).redirect('/branding/index.html');
},

brandingNew: async function (req, res, next) {
  res.render("./not-public/branding/new")
},

brandingCreate: async function (req, res, next) {
  Branding.create(req.body.branding, function(err, newBranding) {
    if(err) {
      console.log(err);
      res.redirect("/branding/edit");
    } else {
      res.redirect("/branding");
    }
  })
},

brandingShow: async function (req, res, next) {
  let slug = req.params.slug;
  Branding.findOne({slug: slug}).exec(function (err, showBranding) {
    if (err) {
      console.log(err);
      res.redirect('/branding');
    } else {
      res.render("branding/index", { branding: showBranding});
    }
  });
},

  // Show page of edit buttons
  brandingEdit: async function (req, res, next) {
    Branding.find({}).sort({_id:-1}).exec(function (err, allBranding){
      if(err) {
        res.redirect("/branding");
      } else {
        res.render("./not-public/branding/edit", {
          branding: allBranding
        });
      }
    });
  },

  // Show form for Editing
  brandingEditForm: async function (req, res, next) {
    Branding.findById(req.params.id, function(err, foundBranding) {
      if(err) {
        res.redirect('/branding/page/edit');
      } else {
        res.render('./not-public/branding/edit-form', { branding: foundBranding});
      }
    });
  },

  // Update Route
  brandingUpdate: async function (req, res, next) {
    Branding.findByIdAndUpdate(req.params.id, req.body.branding, function(err, updatedBranding) {
      if(err) {
        res.redirect('/branding/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/branding/page/edit');
      }
    });
  },

  // Destroy Route
  brandingDestroy: async function (req, res, next) {
    Branding.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/branding/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/branding/page/edit");
      }
    });
  }

}; // closes module exports
