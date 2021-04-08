const Webcasts = require('../models/webcasts');

module.exports = {

webcastsIndex: async function (req, res, next) {
  res.status(301).redirect('/solutions/index.html');
},

webcastsNew: async function (req, res, next) {
  res.render("./not-public/webcasts/new")
},

webcastsCreate: async function (req, res, next) {
  Webcasts.create(req.body.webcasts, function(err, newWebcasts) {
    if(err) {
      console.log(err);
      res.redirect("/webcasts/page/edit");
    } else {
      res.redirect("/webcasts/page/more/edit");
    }
  })
},

webcastsShow: async function (req, res, next) {
  let slug = req.params.slug;
  Webcasts.findOne({slug: slug}).exec(function (err, showWebcasts) {
    if (err) {
      console.log(err);
      res.redirect('/webcasts');
    } else {
      res.render("webcasts/index", { webcasts: showWebcasts});
    }
  });
},

  // Show page of edit buttons
  webcastsEdit: async function (req, res, next) {
    Webcasts.find({}).sort({_id:-1}).exec(function (err, allWebcasts){
      if(err) {
        res.redirect("/webcasts");
      } else {
        res.render("./not-public/webcasts/edit", {
          webcasts: allWebcasts
        });
      }
    });
  },

  // Show form for Editing
  webcastsEditForm: async function (req, res, next) {
    Webcasts.findById(req.params.id, function(err, foundWebcasts) {
      if(err) {
        res.redirect('/webcasts/page/more/edit');
      } else {
        res.render('./not-public/webcasts/edit-form', { webcasts: foundWebcasts});
      }
    });
  },

  // Update Route
  webcastsUpdate: async function (req, res, next) {
    Webcasts.findByIdAndUpdate(req.params.id, req.body.webcasts, function(err, updatedWebcasts) {
      if(err) {
        console.log(err);
        req.flash("error", "!!!ERROR ENTRY NOT UPDATED!!!");
        res.redirect('/webcasts/page/more/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/webcasts/page/more/edit');
      }
    });
  },

  // Destroy Route
  webcastsDestroy: async function (req, res, next) {
    Webcasts.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/webcasts/page/more/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/webcasts/page/more/edit");
      }
    });
  }

}; // closes module exports
