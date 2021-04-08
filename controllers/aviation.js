const Aviation = require('../models/aiaa-aviation');

module.exports = {

aviationIndex: async function (req, res, next) {
  res.status(301).redirect('/aiaa-aviation/index.html');
},

aviationNew: async function (req, res, next) {
  res.render("./not-public/aviation/new")
},

aviationCreate: async function (req, res, next) {
  Aviation.create(req.body.aviation, function(err, aviationConfirm) {
    if(err) {
      console.log(err);
      res.redirect("/aviation/edit");
    } else {
      res.redirect("/aiaa-aviation");
    }
  })
},

aviationShow: async function (req, res, next) {
  let slug = req.params.slug;
  Aviation.findOne({slug: slug}).exec(function (err, aviationConfirm) {
    if (err) {
      console.log(err);
      res.redirect('/aiaa-aviation');
    } else {
      res.render("aiaa-aviation/index", { aviation: aviationConfirm});
    }
  });
},

  // Show page of edit buttons
  aviationEdit: async function (req, res, next) {
    Aviation.find({}).sort({_id:-1}).exec(function (err, aviationConfirm){
      if(err) {
        res.redirect("/aiaa-aviation");
      } else {
        res.render("./not-public/aviation/edit", {
          aviation: aviationConfirm
        });
      }
    });
  },

  // Show form for Editing
  aviationEditForm: async function (req, res, next) {
    Aviation.findById(req.params.id, function(err, aviationConfirm) {
      if(err) {
        res.redirect('/aiaa-aviation/page/edit');
      } else {
        res.render('./not-public/aviation/edit-form', { aviation: aviationConfirm});
      }
    });
  },

  // Update Route
  aviationUpdate: async function (req, res, next) {
    Aviation.findByIdAndUpdate(req.params.id, req.body.aviation, function(err, aviationConfirm) {
      if(err) {
        res.redirect('/aiaa-aviation/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/aiaa-aviation/page/edit');
      }
    });
  },

  // Destroy Route
  aviationDestroy: async function (req, res, next) {
    Aviation.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/aiaa-aviation/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/aiaa-aviation/page/edit");
      }
    });
  }

}; // closes module exports
