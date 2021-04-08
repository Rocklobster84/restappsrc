const Support = require('../models/support');

module.exports = {

supportIndex: async function (req, res, next) {
  res.status(301).redirect('/support/index.html');
},

supportNew: async function (req, res, next) {
  res.render("./not-public/support/new")
},

supportCreate: async function (req, res, next) {
  Support.create(req.body.support, function(err, newSupport) {
    if(err) {
      console.log(err);
      res.redirect("/support/edit");
    } else {
      res.redirect("/support");
    }
  })
},

supportShow: async function (req, res, next) {
  let slug = req.params.slug;
  Support.findOne({slug: slug}).exec(function (err, showSupport) {
    if (err) {
      console.log(err);
      res.redirect('/support');
    } else {
      res.render("support/index", { support: showSupport});
    }
  });
},

  // Show page of edit buttons
  supportEdit: async function (req, res, next) {
    Support.find({}).sort({_id:1}).exec(function (err, allSupport){
      if(err) {
        res.redirect("/support");
      } else {
        res.render("./not-public/support/edit", {
          support: allSupport
        });
      }
    });
  },

  // Show form for Editing
  supportEditForm: async function (req, res, next) {
    Support.findById(req.params.id, function(err, foundSupport) {
      if(err) {
        res.redirect('/support/page/edit');
      } else {
        res.render('./not-public/support/edit-form', { support: foundSupport});
      }
    });
  },

  // Update Route
  supportUpdate: async function (req, res, next) {
    Support.findByIdAndUpdate(req.params.id, req.body.support, function(err, updatedSupport) {
      if(err) {
        res.redirect('/support/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/support/page/edit');
      }
    });
  },

  // Destroy Route
  supportDestroy: async function (req, res, next) {
    Support.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/support/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/support/page/edit");
      }
    });
  }

}; // closes module exports
