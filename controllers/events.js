const Events = require('../models/events');

module.exports = {

eventsIndex: async function (req, res, next) {
  res.status(301).redirect('/events/index.html');
},

eventsNew: async function (req, res, next) {
  res.render("./not-public/events/new")
},

eventsCreate: async function (req, res, next) {
  Events.create(req.body.events, function(err, newEvents) {
    if(err) {
      console.log(err);
      res.redirect("/events/edit");
    } else {
      res.redirect("/events");
    }
  })
},

eventsShow: async function (req, res, next) {
  let slug = req.params.slug;
  Events.findOne({slug: slug}).exec(function (err, showEvents) {
    if (err) {
      console.log(err);
      res.redirect('/events');
    } else {
      res.render("events/index", { events: showEvents});
    }
  });
},

  // Show page of edit buttons
  eventsEdit: async function (req, res, next) {
    Events.find({}).sort({_id:-1}).exec(function (err, allEvents){
      if(err) {
        res.redirect("/events");
      } else {
        res.render("./not-public/events/edit", {
          events: allEvents
        });
      }
    });
  },

  // Show form for Editing
  eventsEditForm: async function (req, res, next) {
    Events.findById(req.params.id, function(err, foundEvents) {
      if(err) {
        res.redirect('/events/page/edit');
      } else {
        res.render('./not-public/events/edit-form', { events: foundEvents});
      }
    });
  },

  // Update Route
  eventsUpdate: async function (req, res, next) {
    Events.findByIdAndUpdate(req.params.id, req.body.events, function(err, updatedEvents) {
      if(err) {
        res.redirect('/events/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/events/page/edit');
      }
    });
  },

  // Destroy Route
  eventsDestroy: async function (req, res, next) {
    Events.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/events/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/events/page/edit");
      }
    });
  }

}; // closes module exports
