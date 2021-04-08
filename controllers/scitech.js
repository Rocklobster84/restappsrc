const Scitech = require('../models/aiaa-scitech');

module.exports = {

scitechIndex: async function (req, res, next) {
  res.status(301).redirect('/aiaa-scitech/index.html');
},

scitechNew: async function (req, res, next) {
  res.render("./not-public/scitech/new")
},

scitechCreate: async function (req, res, next) {
  Scitech.create(req.body.scitech, function(err, newScitech) {
    if(err) {
      console.log(err);
      res.redirect("/scitech/edit");
    } else {
      res.redirect("/aiaa-scitech");
    }
  })
},

scitechShow: async function (req, res, next) {
  let slug = req.params.slug;
  Scitech.findOne({slug: slug}).exec(function (err, showScitech) {
    if (err) {
      console.log(err);
      res.redirect('/aiaa-scitech');
    } else {
      res.render("aiaa-scitech/index", { scitech: showScitech});
    }
  });
},

  // Show page of edit buttons
  scitechEdit: async function (req, res, next) {
    Scitech.find({}).sort({_id:-1}).exec(function (err, allScitech){
      if(err) {
        res.redirect("/aiaa-scitech");
      } else {
        res.render("./not-public/scitech/edit", {
          scitech: allScitech
        });
      }
    });
  },

  // Show form for Editing
  scitechEditForm: async function (req, res, next) {
    Scitech.findById(req.params.id, function(err, foundScitech) {
      if(err) {
        res.redirect('/aiaa-scitech/page/edit');
      } else {
        res.render('./not-public/scitech/edit-form', { scitech: foundScitech});
      }
    });
  },

  // Update Route
  scitechUpdate: async function (req, res, next) {
    Scitech.findByIdAndUpdate(req.params.id, req.body.scitech, function(err, updatedScitech) {
      if(err) {
        res.redirect('/aiaa-scitech/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/aiaa-scitech/page/edit');
      }
    });
  },

  // Destroy Route
  scitechDestroy: async function (req, res, next) {
    Scitech.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/aiaa-scitech/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/aiaa-scitech/page/edit");
      }
    });
  }

}; // closes module exports
