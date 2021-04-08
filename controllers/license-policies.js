const LicensePolicies = require('../models/license-policies');

module.exports = {

licensePolIndex: async function (req, res, next) {
  res.status(301).redirect('/license-policies/index.html');
},

	licensePolNew: async function (req, res, next) {
  res.render("./not-public/license-policies/new")
},

	licensePolCreate: async function (req, res, next) {
  LicensePolicies.create(req.body.licensePol, function(err, newLicensePolicies) {
    if(err) {
      console.log(err);
      res.redirect("/license-policies/edit");
    } else {
      res.redirect("/license-policies");
    }
  })
},

	licensePolShow: async function (req, res, next) {
  let slug = req.params.slug;
  LicensePolicies.findOne({slug: slug}).exec(function (err, showLicensePolicies) {
    if (err) {
      console.log(err);
      res.redirect('/license-policies');
    } else {
      res.render("license-policies/index", { licensePol: showLicensePolicies});
    }
  });
},

  // Show page of edit buttons
	licensePolEdit: async function (req, res, next) {
    LicensePolicies.find({}).sort({_id:-1}).exec(function (err, allLicensePolicies){
      if(err) {
        res.redirect("/license-policies");
      } else {
        res.render("./not-public/license-policies/edit", {
	        licensePol: allLicensePolicies
        });
      }
    });
  },

  // Show form for Editing
	licensePolEditForm: async function (req, res, next) {
    LicensePolicies.findById(req.params.id, function(err, foundLicensePolicies) {
      if(err) {
        res.redirect('/license-policies/page/edit');
      } else {
        res.render('./not-public/license-policies/edit-form', { licensePol: foundLicensePolicies});
      }
    });
  },

  // Update Route
	licensePolUpdate: async function (req, res, next) {
    LicensePolicies.findByIdAndUpdate(req.params.id, req.body.licensePol, function(err, updatedLicensePolicies) {
      if(err) {
        res.redirect('/license-policies/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/license-policies/page/edit');
      }
    });
  },

  // Destroy Route
	licensePolDestroy: async function (req, res, next) {
    LicensePolicies.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/license-policies/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/license-policies/page/edit");
      }
    });
  }

}; // closes module exports
