const UserMeeting = require('../models/user-meeting');

module.exports = {

userMeetingIndex: async function (req, res, next) {
  res.status(301).redirect('/user-meeting/index.html');
},

userMeetingNew: async function (req, res, next) {
  res.render("./not-public/user-meeting/new")
},

userMeetingCreate: async function (req, res, next) {
  UserMeeting.create(req.body.userMeeting, function(err, newUserMeeting) {
    if(err) {
      console.log(err);
      res.redirect("/user-meeting/edit");
    } else {
      res.redirect("/user-meeting");
    }
  })
},

userMeetingShow: async function (req, res, next) {
  let slug = req.params.slug;
  UserMeeting.findOne({slug: slug}).exec(function (err, showUserMeeting) {
    if (err) {
      console.log(err);
      res.redirect('/user-meeting');
    } else {
      res.render("user-meeting/index", { userMeeting: showUserMeeting});
    }
  });
},

  // Show page of edit buttons
  userMeetingEdit: async function (req, res, next) {
    UserMeeting.find({}).sort({_id:-1}).exec(function (err, allUserMeeting){
      if(err) {
        res.redirect("/user-meeting");
      } else {
        res.render("./not-public/user-meeting/edit", {
          userMeeting: allUserMeeting
        });
      }
    });
  },

  // Show form for Editing
  userMeetingEditForm: async function (req, res, next) {
    UserMeeting.findById(req.params.id, function(err, foundUserMeeting) {
      if(err) {
        res.redirect('/user-meeting/page/edit');
      } else {
        res.render('./not-public/user-meeting/edit-form', { userMeeting: foundUserMeeting});
      }
    });
  },

  // Update Route
  userMeetingUpdate: async function (req, res, next) {
    UserMeeting.findByIdAndUpdate(req.params.id, req.body.userMeeting, function(err, updatedUserMeeting) {
      if(err) {
        res.redirect('/user-meeting/page/edit');
      } else {
        req.flash("success", "!!!ENTRY UPDATED!!!");
        res.redirect('/user-meeting/page/edit');
      }
    });
  },

  // Destroy Route
  userMeetingDestroy: async function (req, res, next) {
    UserMeeting.findByIdAndRemove(req.params.id, function(err) {
      if(err) {
        req.flash("error", "ENTRY NOT FOUND");
        res.redirect("/user-meeting/page/edit");
      } else {
        req.flash("success", "ENTRY SUCCESSFULLY DELETED");
        res.redirect("/user-meeting/page/edit");
      }
    });
  }

}; // closes module exports
