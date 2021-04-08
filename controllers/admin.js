const AdminPage = require('../models/admin');

module.exports = {

adminIndex: async function (req, res, next) {
  res.status(301).redirect('/admin/page/edit');
},

adminNew: async function (req, res, next) {
  res.render("./not-public/admin/admin-new")
},

adminCreate: async function (req, res, next) {
	AdminPage.create(req.body.admin, function(err, newAdmin) {
    if(err) {
      console.log(err);
      res.redirect("/admin/edit");
    } else {
      res.redirect("/admin");
    }
  })
},

  // Show page of edit buttons
  adminEdit: async function (req, res, next) {
	  AdminPage.find({}).sort({sectionName:1}).exec(function (err, allAdmin){
      if(err) {
        res.redirect("/admin");
      } else {
        res.render("./not-public/admin/admin-edit", {
          admin: allAdmin
        });
      }
    });
  },

  // Show form for Editing
  adminEditForm: async function (req, res, next) {
	  AdminPage.findById(req.params.id, function(err, foundAdmin) {
      if(err) {
        res.redirect('/admin/page/edit');
      } else {
        res.render('./not-public/admin/admin-edit-form', { admin: foundAdmin});
      }
    });
  },

  // Update Route
  adminUpdate: async function (req, res, next) {
	  AdminPage.findByIdAndUpdate(req.params.id, req.body.admin, function(err, updatedAdmin) {
      if(err) {
        res.redirect('/admin/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/admin/page/edit');
      }
    });
  },

  // Destroy Route
  adminDestroy: async function (req, res, next) {
	  AdminPage.findByIdAndRemove(req.params.admin, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/admin/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/admin/page/edit");
      }
    });
  }

}; // closes module exports
