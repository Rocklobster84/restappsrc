const Viewer = require('../models/viewer');

module.exports = {

viewerIndex: async function (req, res, next) {
  res.status(301).redirect('/viewer/aEakEW8K9DkR2Xbx.html');
},

viewerNew: async function (req, res, next) {
  res.render("./not-public/viewer/new")
},

viewerCreate: async function (req, res, next) {
  Viewer.create(req.body.viewer, function(err, newViewer) {
    if(err) {
      console.log(err);
      res.redirect("/viewer/edit");
    } else {
      res.redirect("/viewer/aEakEW8K9DkR2Xbx");
    }
  })
},

viewerShow: async function (req, res, next) {
  let slug = req.params.slug;
  Viewer.findOne({slug: slug}).exec(function (err, showViewer) {
    if (err) {
      console.log(err);
      res.redirect('/viewer/aEakEW8K9DkR2Xbx');
    } else {
      res.render("viewer/aEakEW8K9DkR2Xbx", { viewer: showViewer});
    }
  });
},

  // Show page of edit buttons
  viewerEdit: async function (req, res, next) {
    Viewer.find({}).sort({_id:-1}).exec(function (err, allViewer){
      if(err) {
        res.redirect("/viewer/aEakEW8K9DkR2Xbx");
      } else {
        res.render("./not-public/viewer/edit", {
          viewer: allViewer
        });
      }
    });
  },

  // Show form for Editing
  viewerEditForm: async function (req, res, next) {
    Viewer.findById(req.params.id, function(err, foundViewer) {
      if(err) {
        res.redirect('/viewer/page/edit');
      } else {
        res.render('./not-public/viewer/edit-form', { viewer: foundViewer});
      }
    });
  },

  // Update Route
  viewerUpdate: async function (req, res, next) {
    Viewer.findByIdAndUpdate(req.params.id, req.body.viewer, function(err, updatedViewer) {
      if(err) {
        res.redirect('/viewer/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/viewer/page/edit');
      }
    });
  },

  // Destroy Route
  viewerDestroy: async function (req, res, next) {
    Viewer.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/viewer/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/viewer/page/edit");
      }
    });
  }

}; // closes module exports
