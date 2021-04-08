const Teaching = require('../models/teaching');

module.exports = {

teachIndex: async function (req, res, next) {
  res.status(301).redirect('/teaching/index.html');
},

teachNew: async function (req, res, next) {
  res.render("./not-public/teaching/new")
},

teachCreate: async function (req, res, next) {
  Teaching.create(req.body.teach, function(err, newTeach) {
    if(err) {
      console.log(err);
      res.redirect("/teaching/edit");
    } else {
      res.redirect("/teaching");
    }
  })
},

teachShow: async function (req, res, next) {
  let slug = req.params.slug;
  Teaching.findOne({slug: slug}).exec(function (err, showTeach) {
    if (err) {
      console.log(err);
      res.redirect('/teaching');
    } else {
      res.render("teaching/index", { teach: showTeach});
    }
  });
},

  // Show page of edit buttons
  teachEdit: async function (req, res, next) {
    Teaching.find({}).sort({_id:-1}).exec(function (err, allTeach){
      if(err) {
        res.redirect("/teaching");
      } else {
        res.render("./not-public/teaching/edit", {
          teach: allTeach
        });
      }
    });
  },

  // Show form for Editing
  teachEditForm: async function (req, res, next) {
    Teaching.findById(req.params.id, function(err, foundTeach) {
      if(err) {
        res.redirect('/teaching/page/edit');
      } else {
        res.render('./not-public/teaching/edit-form', { teach: foundTeach});
      }
    });
  },

  // Update Route
  teachUpdate: async function (req, res, next) {
    Teaching.findByIdAndUpdate(req.params.id, req.body.teach, function(err, updatedTeach) {
      if(err) {
        res.redirect('/teaching/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/teaching/page/edit');
      }
    });
  },

  // Destroy Route
  teachDestroy: async function (req, res, next) {
    Teaching.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/teaching/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/teaching/page/edit");
      }
    });
  }

}; // closes module exports
