const Licenses = require('../models/licenses');

module.exports = {

licensesIndex: async function (req, res, next) {
  res.status(301).redirect('/licenses/index.html');
},

licensesNew: async function (req, res, next) {
  res.render("./not-public/licenses/new")
},

licensesCreate: async function (req, res, next) {
  Licenses.create(req.body.licenses, function(err, newLicenses) {
    if(err) {
      console.log(err);
      res.redirect("/licenses/edit");
    } else {
      res.redirect("/licenses");
    }
  })
},

licensesShow: async function (req, res, next) {
  let slug = req.params.slug;
  Licenses.findOne({slug: slug}).exec(function (err, showLicenses) {
    if (err) {
      console.log(err);
      res.redirect('/licenses');
    } else {
      res.render("licenses/index", { licenses: showLicenses});
    }
  });
},

  // Show page of edit buttons
  licensesEdit: async function (req, res, next) {
    Licenses.find({}).sort({_id:-1}).exec(function (err, allLicenses){
      if(err) {
        res.redirect("/licenses");
      } else {
        res.render("./not-public/licenses/edit", {
          licenses: allLicenses
        });
      }
    });
  },

  // Show form for Editing
  licensesEditForm: async function (req, res, next) {
    Licenses.findById(req.params.id, function(err, foundLicenses) {
      if(err) {
        res.redirect('/licenses/page/edit');
      } else {
        res.render('./not-public/licenses/edit-form', { licenses: foundLicenses});
      }
    });
  },

  // Update Route
  licensesUpdate: async function (req, res, next) {
    Licenses.findByIdAndUpdate(req.params.id, req.body.licenses, function(err, updatedLicenses) {
      if(err) {
        res.redirect('/licenses/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/licenses/page/edit');
      }
    });
  },

  // Destroy Route
  licensesDestroy: async function (req, res, next) {
    Licenses.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/licenses/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/licenses/page/edit");
      }
    });
  }

}; // closes module exports
