const Vpat = require('../models/vpat');

module.exports = {

vpatIndex: async function (req, res, next) {
  res.status(301).redirect('/vpat/index.html');
},

vpatNew: async function (req, res, next) {
  res.render("./not-public/vpat/new")
},

vpatCreate: async function (req, res, next) {
  Vpat.create(req.body.vpat, function(err, newVpat) {
    if(err) {
      console.log(err);
      res.redirect("/vpat/edit");
    } else {
      res.redirect("/vpat");
    }
  })
},

vpatShow: async function (req, res, next) {
  let slug = req.params.slug;
  Vpat.findOne({slug: slug}).exec(function (err, showVpat) {
    if (err) {
      console.log(err);
      res.redirect('/vpat');
    } else {
      res.render("vpat/index", { vpat: showVpat});
    }
  });
},

  // Show page of edit buttons
  vpatEdit: async function (req, res, next) {
    Vpat.find({}).sort({_id:-1}).exec(function (err, allVpat){
      if(err) {
        res.redirect("/vpat");
      } else {
        res.render("./not-public/vpat/edit", {
          vpat: allVpat
        });
      }
    });
  },

  // Show form for Editing
  vpatEditForm: async function (req, res, next) {
    Vpat.findById(req.params.id, function(err, foundVpat) {
      if(err) {
        res.redirect('/vpat/page/edit');
      } else {
        res.render('./not-public/vpat/edit-form', { vpat: foundVpat});
      }
    });
  },

  // Update Route
  vpatUpdate: async function (req, res, next) {
    Vpat.findByIdAndUpdate(req.params.id, req.body.vpat, function(err, updatedVpat) {
      if(err) {
        res.redirect('/vpat/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/vpat/page/edit');
      }
    });
  },

  // Destroy Route
  vpatDestroy: async function (req, res, next) {
    Vpat.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/vpat/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/vpat/page/edit");
      }
    });
  }

}; // closes module exports
