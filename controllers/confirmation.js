const Confirmation = require('../models/confirmation');

module.exports = {

confirmIndex: async function (req, res, next) {
  res.status(301).redirect('/confirmation/index.html');
},

confirmNew: async function (req, res, next) {
  res.render("./not-public/confirmation/confirm-new")
},

confirmCreate: async function (req, res, next) {
  Confirmation.create(req.body.confirm, function(err, newConfirm) {
    if(err) {
      console.log(err);
      res.redirect("/confirmation/edit");
    } else {
      res.redirect("/confirmation");
    }
  })
},

confirmShow: async function (req, res, next) {
  let slug = req.params.slug;
  Confirmation.findOne({slug: slug}).exec(function (err, showConfirm) {
    if (err) {
      console.log(err);
      res.redirect('/confirmation');
    } else {
      res.render("confirmation/index", { conf: showConfirm});
    }
  });
},

  // Show page of edit buttons
  confirmEdit: async function (req, res, next) {
    Confirmation.find({}).sort({_id:-1}).exec(function (err, allConfirm){
      if(err) {
        res.redirect("/confirmation");
      } else {
        res.render("./not-public/confirmation/confirm-edit", {
          conf: allConfirm
        });
      }
    });
  },

  // Show form for Editing
  confEditForm: async function (req, res, next) {
    Confirmation.findById(req.params.id, function(err, foundConfirm) {
      if(err) {
        res.redirect('/confirmation/page/edit');
      } else {
        res.render('./not-public/confirmation/confirm-edit-form', { conf: foundConfirm});
      }
    });
  },

  // Update Route
  confUpdate: async function (req, res, next) {
    Confirmation.findByIdAndUpdate(req.params.id, req.body.conf, function(err, updatedConfirm) {
      if(err) {
        res.redirect('/confirmation/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/confirmation/page/edit');
      }
    });
  },

  // Destroy Route
  confDestroy: async function (req, res, next) {
    Confirmation.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/confirmation/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/confirmation/page/edit");
      }
    });
  }

}; // closes module exports
