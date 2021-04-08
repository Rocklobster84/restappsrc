const Downloads = require('../models/downloads');

module.exports = {

downloadsIndex: async function (req, res, next) {
  res.status(301).redirect('/downloads/index.html');
},

downloadsNew: async function (req, res, next) {
  res.render("./not-public/downloads/new")
},

downloadsCreate: async function (req, res, next) {
  Downloads.create(req.body.downloads, function(err, newDownloads) {
    if(err) {
      console.log(err);
      res.redirect("/downloads/edit");
    } else {
      res.redirect("/downloads");
    }
  })
},

downloadsShow: async function (req, res, next) {
  let slug = req.params.slug;
  Downloads.findOne({slug: slug}).exec(function (err, showDownloads) {
    if (err) {
      console.log(err);
      res.redirect('/downloads');
    } else {
      res.render("downloads/index", { downloads: showDownloads});
    }
  });
},

  // Show page of edit buttons
  downloadsEdit: async function (req, res, next) {
    Downloads.find({}).sort({_id:-1}).exec(function (err, allDownloads){
      if(err) {
        res.redirect("/downloads");
      } else {
        res.render("./not-public/downloads/edit", {
          downloads: allDownloads
        });
      }
    });
  },

  // Show form for Editing
  downloadsEditForm: async function (req, res, next) {
    Downloads.findById(req.params.id, function(err, foundDownloads) {
      if(err) {
        res.redirect('/downloads/page/edit');
      } else {
        res.render('./not-public/downloads/edit-form', { downloads: foundDownloads});
      }
    });
  },

  // Update Route
  downloadsUpdate: async function (req, res, next) {
    Downloads.findByIdAndUpdate(req.params.id, req.body.downloads, function(err, updatedDownloads) {
      if(err) {
        res.redirect('/downloads/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/downloads/page/edit');
      }
    });
  },

  // Destroy Route
  downloadsDestroy: async function (req, res, next) {
    Downloads.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/downloads/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/downloads/page/edit");
      }
    });
  },

}; // closes module exports
