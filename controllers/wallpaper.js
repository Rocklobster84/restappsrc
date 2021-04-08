const Wallpaper = require('../models/wallpaper');

module.exports = {

wallpaperIndex: async function (req, res, next) {
  res.status(301).redirect('/wallpaper/index.html');
},

wallpaperNew: async function (req, res, next) {
  res.render("./not-public/wallpaper/new")
},

wallpaperCreate: async function (req, res, next) {
  Wallpaper.create(req.body.wallpaper, function(err, newWallpaper) {
    if(err) {
      console.log(err);
      res.redirect("/wallpaper/edit");
    } else {
      res.redirect("/wallpaper");
    }
  })
},

wallpaperShow: async function (req, res, next) {
  let slug = req.params.slug;
  Wallpaper.findOne({slug: slug}).exec(function (err, showWallpaper) {
    if (err) {
      console.log(err);
      res.redirect('/wallpaper');
    } else {
      res.render("wallpaper/index", { wallpaper: showWallpaper});
    }
  });
},

  // Show page of edit buttons
  wallpaperEdit: async function (req, res, next) {
    Wallpaper.find({}).sort({_id:-1}).exec(function (err, allWallpaper){
      if(err) {
        res.redirect("/wallpaper");
      } else {
        res.render("./not-public/wallpaper/edit", {
          wallpaper: allWallpaper
        });
      }
    });
  },

  // Show form for Editing
  wallpaperEditForm: async function (req, res, next) {
    Wallpaper.findById(req.params.id, function(err, foundWallpaper) {
      if(err) {
        res.redirect('/wallpaper/page/edit');
      } else {
        res.render('./not-public/wallpaper/edit-form', { wallpaper: foundWallpaper});
      }
    });
  },

  // Update Route
  wallpaperUpdate: async function (req, res, next) {
    Wallpaper.findByIdAndUpdate(req.params.id, req.body.wallpaper, function(err, updatedWallpaper) {
      if(err) {
        res.redirect('/wallpaper/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/wallpaper/page/edit');
      }
    });
  },

  // Destroy Route
  wallpaperDestroy: async function (req, res, next) {
    Wallpaper.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/wallpaper/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/wallpaper/page/edit");
      }
    });
  }

}; // closes module exports
