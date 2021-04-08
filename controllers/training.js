const Training = require('../models/training');

module.exports = {

trainingIndex: async function (req, res, next) {
  res.status(301).redirect('/training/index.html');
},

trainingNew: async function (req, res, next) {
  res.render("./not-public/training/new")
},

trainingCreate: async function (req, res, next) {
  Training.create(req.body.training, function(err, newTraining) {
    if(err) {
      console.log(err);
      res.redirect("/training/edit");
    } else {
      res.redirect("/training");
    }
  })
},

trainingShow: async function (req, res, next) {
  let slug = req.params.slug;
  Training.findOne({slug: slug}).exec(function (err, showTraining) {
    if (err) {
      console.log(err);
      res.redirect('/training');
    } else {
      res.render("training/index", { training: showTraining});
    }
  });
},

  // Show page of edit buttons
  trainingEdit: async function (req, res, next) {
    Training.find({}).sort({_id:-1}).exec(function (err, allTraining){
      if(err) {
        res.redirect("/training");
      } else {
        res.render("./not-public/training/edit", {
          training: allTraining
        });
      }
    });
  },

  // Show form for Editing
  trainingEditForm: async function (req, res, next) {
    Training.findById(req.params.id, function(err, foundTraining) {
      if(err) {
        res.redirect('/training/page/edit');
      } else {
        res.render('./not-public/training/edit-form', { training: foundTraining});
      }
    });
  },

  // Update Route
  trainingUpdate: async function (req, res, next) {
    Training.findByIdAndUpdate(req.params.id, req.body.training, function(err, updatedTraining) {
      if(err) {
        res.redirect('/training/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/training/page/edit');
      }
    });
  },

  // Destroy Route
  trainingDestroy: async function (req, res, next) {
    Training.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/training/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/training/page/edit");
      }
    });
  }

}; // closes module exports
