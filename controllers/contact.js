const Contact = require('../models/contact');

module.exports = {

contactIndex: async function (req, res, next) {
  res.status(301).redirect('/contact/index.html');
},

contactNew: async function (req, res, next) {
  res.render("./not-public/contact/contact-new")
},

contactCreate: async function (req, res, next) {
  Contact.create(req.body.contact, function(err, newContact) {
    if(err) {
      console.log(err);
      res.redirect("/contact/edit");
    } else {
      res.redirect("/contact");
    }
  })
},

contactShow: async function (req, res, next) {
  let slug = req.params.slug;
  Contact.findOne({slug: slug}).exec(function (err, showContact) {
    if (err) {
      console.log(err);
      res.redirect('/contact');
    } else {
      res.render("contact/index", { contact: showContact});
    }
  });
},

  // Show page of edit buttons
  contactEdit: async function (req, res, next) {
    Contact.find({}).sort({_id:-1}).exec(function (err, allContact){
      if(err) {
        res.redirect("/contact");
      } else {
        res.render("./not-public/contact/contact-edit", {
          contact: allContact
        });
      }
    });
  },

  // Show form for Editing
  contactEditForm: async function (req, res, next) {
    Contact.findById(req.params.id, function(err, foundContact) {
      if(err) {
        res.redirect('/contact/page/edit');
      } else {
        res.render('./not-public/contact/contact-edit-form', { contact: foundContact});
      }
    });
  },

  // Update Route
  contactUpdate: async function (req, res, next) {
    Contact.findByIdAndUpdate(req.params.id, req.body.contact, function(err, updatedContact) {
      if(err) {
        res.redirect('/contact/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/contact/page/edit');
      }
    });
  },

  // Destroy Route
  contactDestroy: async function (req, res, next) {
    Contact.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/contact/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/contact/page/edit");
      }
    });
  }

}; // closes module exports
