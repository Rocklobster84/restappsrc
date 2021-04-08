const Services = require('../models/services');

module.exports = {

servicesIndex: async function (req, res, next) {
  res.status(301).redirect('/services/index.html');
},

servicesNew: async function (req, res, next) {
  res.render("./not-public/services/new")
},

servicesCreate: async function (req, res, next) {
  Services.create(req.body.services, function(err, newServices) {
    if(err) {
      console.log(err);
      res.redirect("/services/edit");
    } else {
      res.redirect("/services");
    }
  })
},

servicesShow: async function (req, res, next) {
  let slug = req.params.slug;
  Services.findOne({slug: slug}).exec(function (err, showServices) {
    if (err) {
      console.log(err);
      res.redirect('/services');
    } else {
      res.render("services/index", { services: showServices});
    }
  });
},

  // Show page of edit buttons
  servicesEdit: async function (req, res, next) {
    Services.find({}).sort({_id:-1}).exec(function (err, allServices){
      if(err) {
        res.redirect("/services");
      } else {
        res.render("./not-public/services/edit", {
          services: allServices
        });
      }
    });
  },

  // Show form for Editing
  servicesEditForm: async function (req, res, next) {
    Services.findById(req.params.id, function(err, foundServices) {
      if(err) {
        res.redirect('/services/page/edit');
      } else {
        res.render('./not-public/services/edit-form', { services: foundServices});
      }
    });
  },

  // Update Route
  servicesUpdate: async function (req, res, next) {
    Services.findByIdAndUpdate(req.params.id, req.body.services, function(err, updatedServices) {
      if(err) {
        res.redirect('/services/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/services/page/edit');
      }
    });
  },

  // Destroy Route
  servicesDestroy: async function (req, res, next) {
    Services.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/services/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/services/page/edit");
      }
    });
  }

}; // closes module exports
