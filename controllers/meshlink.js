const MeshLink = require('../models/meshlink');

module.exports = {

meshlinkIndex: async function (req, res, next) {
  res.status(301).redirect('/meshlink/index.html');
},

meshlinkNew: async function (req, res, next) {
  res.render("./not-public/meshlink/new")
},

meshlinkCreate: async function (req, res, next) {
  MeshLink.create(req.body.meshlink, function(err, newMeshLink) {
    if(err) {
      console.log(err);
      res.redirect("/meshlink/edit");
    } else {
      res.redirect("/meshlink");
    }
  })
},

meshlinkShow: async function (req, res, next) {
  let slug = req.params.slug;
  MeshLink.findOne({slug: slug}).exec(function (err, showMeshLink) {
    if (err) {
      console.log(err);
      res.redirect('/meshlink');
    } else {
      res.render("meshlink/index", { meshlink: showMeshLink});
    }
  });
},

  // Show page of edit buttons
  meshlinkEdit: async function (req, res, next) {
    MeshLink.find({}).sort({_id:-1}).exec(function (err, allMeshLink){
      if(err) {
        res.redirect("/meshlink");
      } else {
        res.render("./not-public/meshlink/edit", {
          meshlink: allMeshLink
        });
      }
    });
  },

  // Show form for Editing
  meshlinkEditForm: async function (req, res, next) {
    MeshLink.findById(req.params.id, function(err, foundMeshLink) {
      if(err) {
        res.redirect('/meshlink/page/edit');
      } else {
        res.render('./not-public/meshlink/edit-form', { meshlink: foundMeshLink});
      }
    });
  },

  // Update Route
  meshlinkUpdate: async function (req, res, next) {
    MeshLink.findByIdAndUpdate(req.params.id, req.body.meshlink, function(err, updatedMeshLink) {
      if(err) {
        res.redirect('/meshlink/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/meshlink/page/edit');
      }
    });
  },

  // Destroy Route
  meshlinkDestroy: async function (req, res, next) {
    MeshLink.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/meshlink/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/meshlink/page/edit");
      }
    });
  }

}; // closes module exports
