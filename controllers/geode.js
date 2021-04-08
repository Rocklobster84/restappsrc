const Geode = require('../models/geode');

module.exports = {

geodeIndex: async function (req, res, next) {
  res.status(301).redirect('/geode/index.html');
},

geodeNew: async function (req, res, next) {
  res.render("./not-public/geode/new")
},

geodeCreate: async function (req, res, next) {
  Geode.create(req.body.geode, function(err, newGeode) {
    if(err) {
      console.log(err);
      res.redirect("/geode/edit");
    } else {
      res.redirect("/geode");
    }
  })
},

geodeShow: async function (req, res, next) {
  let slug = req.params.slug;
  Geode.findOne({slug: slug}).exec(function (err, showGeode) {
    if (err) {
      console.log(err);
      res.redirect('/geode');
    } else {
      res.render("geode/index", { geode: showGeode});
    }
  });
},

  // Show page of edit buttons
  geodeEdit: async function (req, res, next) {
    Geode.find({}).sort({_id:-1}).exec(function (err, allGeode){
      if(err) {
        res.redirect("/geode");
      } else {
        res.render("./not-public/geode/edit", {
          geode: allGeode
        });
      }
    });
  },

  // Show form for Editing
  geodeEditForm: async function (req, res, next) {
    Geode.findById(req.params.id, function(err, foundGeode) {
      if(err) {
        res.redirect('/geode/page/edit');
      } else {
        res.render('./not-public/geode/edit-form', { geode: foundGeode});
      }
    });
  },

  // Update Route
  geodeUpdate: async function (req, res, next) {
    Geode.findByIdAndUpdate(req.params.id, req.body.geode, function(err, updatedGeode) {
      if(err) {
        res.redirect('/geode/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/geode/page/edit');
      }
    });
  },

  // Destroy Route
  geodeDestroy: async function (req, res, next) {
    Geode.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/geode/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/geode/page/edit");
      }
    });
  }

}; // closes module exports
