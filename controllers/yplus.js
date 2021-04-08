const Yplus = require('../models/yplus');

module.exports = {

yplusIndex: async function (req, res, next) {
  res.status(301).redirect('/yplus/index.html');
},

yplusNew: async function (req, res, next) {
  res.render("./not-public/yplus/new")
},

yplusCreate: async function (req, res, next) {
  Yplus.create(req.body.yplus, function(err, newYplus) {
    if(err) {
      console.log(err);
      res.redirect("/yplus/edit");
    } else {
      res.redirect("/yplus");
    }
  })
},

yplusShow: async function (req, res, next) {
  let slug = req.params.slug;
  Yplus.findOne({slug: slug}).exec(function (err, showYplus) {
    if (err) {
      console.log(err);
      res.redirect('/yplus');
    } else {
      res.render("yplus/index", { yplus: showYplus});
    }
  });
},

  // Show page of edit buttons
  yplusEdit: async function (req, res, next) {
    Yplus.find({}).sort({_id:-1}).exec(function (err, allYplus){
      if(err) {
        res.redirect("/yplus");
      } else {
        res.render("./not-public/yplus/edit", {
          yplus: allYplus
        });
      }
    });
  },

  // Show form for Editing
  yplusEditForm: async function (req, res, next) {
    Yplus.findById(req.params.id, function(err, foundYplus) {
      if(err) {
        res.redirect('/yplus/page/edit');
      } else {
        res.render('./not-public/yplus/edit-form', { yplus: foundYplus});
      }
    });
  },

  // Update Route
  yplusUpdate: async function (req, res, next) {
    Yplus.findByIdAndUpdate(req.params.id, req.body.yplus, function(err, updatedYplus) {
      if(err) {
        res.redirect('/yplus/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/yplus/page/edit');
      }
    });
  },

  // Destroy Route
  yplusDestroy: async function (req, res, next) {
    Yplus.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/yplus/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/yplus/page/edit");
      }
    });
  }

}; // closes module exports
