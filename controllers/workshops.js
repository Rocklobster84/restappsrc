const Workshops = require('../models/workshops');

module.exports = {

workshopsIndex: async function (req, res, next) {
  res.status(301).redirect('/workshops/index.html');
},

workshopsNew: async function (req, res, next) {
  res.render("./not-public/workshops/new")
},

workshopsCreate: async function (req, res, next) {
  Workshops.create(req.body.workshops, function(err, newWorkshops) {
    if(err) {
      console.log(err);
      res.redirect("/workshops/edit");
    } else {
      res.redirect("/workshops");
    }
  })
},

workshopsShow: async function (req, res, next) {
  let slug = req.params.slug;
  Workshops.findOne({slug: slug}).exec(function (err, showWorkshops) {
    if (err) {
      console.log(err);
      res.redirect('/workshops');
    } else {
      res.render("workshops/index", { workshops: showWorkshops});
    }
  });
},

  // Show page of edit buttons
  workshopsEdit: async function (req, res, next) {
    Workshops.find({}).sort({_id:-1}).exec(function (err, allWorkshops){
      if(err) {
        res.redirect("/workshops");
      } else {
        res.render("./not-public/workshops/edit", {
          workshops: allWorkshops
        });
      }
    });
  },

  // Show form for Editing
  workshopsEditForm: async function (req, res, next) {
    Workshops.findById(req.params.id, function(err, foundWorkshops) {
      if(err) {
        res.redirect('/workshops/page/edit');
      } else {
        res.render('./not-public/workshops/edit-form', { workshops: foundWorkshops});
      }
    });
  },

  // Update Route
  workshopsUpdate: async function (req, res, next) {
    Workshops.findByIdAndUpdate(req.params.id, req.body.workshops, function(err, updatedWorkshops) {
      if(err) {
        res.redirect('/workshops/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/workshops/page/edit');
      }
    });
  },

  // Destroy Route
  workshopsDestroy: async function (req, res, next) {
    Workshops.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/workshops/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/workshops/page/edit");
      }
    });
  }

}; // closes module exports
