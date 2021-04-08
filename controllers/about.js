const About = require('../models/about');

module.exports = {

	aboutIndex: async function (req, res, next) {
		res.status(301).redirect('/about/index.html');
	},

	aboutNew: async function (req, res, next) {
		res.render("./not-public/about/new")
	},

	aboutCreate: async function (req, res, next) {
		About.create(req.body.about, function(err, newAbout) {
			if(err) {
				console.log(err);
				res.redirect("/about/edit");
			} else {
				res.redirect("/about");
			}
		})
	},

	aboutShow: async function (req, res, next) {
		let slug = req.params.slug;
		About.findOne({slug: slug}).exec(function (err, showAbout) {
			if (err) {
				console.log(err);
				res.redirect('/about');
			} else {
				res.render("about/index", { about: showAbout});
			}
		});
	},

	// Show page of edit buttons
	aboutEdit: async function (req, res, next) {
		About.find({}).sort({_id:-1}).exec(function (err, allAbout){
			if(err) {
				res.redirect("/about");
			} else {
				res.render("./not-public/about/edit", {
					about: allAbout
				});
			}
		});
	},

	// Show form for Editing
	aboutEditForm: async function (req, res, next) {
		About.findById(req.params.id, function(err, foundAbout) {
			if(err) {
				res.redirect('/about/page/edit');
			} else {
				res.render('./not-public/about/edit-form', { about: foundAbout});
			}
		});
	},

	// Update Route
	aboutUpdate: async function (req, res, next) {
		About.findByIdAndUpdate(req.params.id, req.body.about, function(err, updatedAbout) {
			if(err) {
				res.redirect('/about/page/edit');
			} else {
				req.flash("success", "!!!ENTRY UPDATED!!!");
				res.redirect('/about/page/edit');
			}
		});
	},

	// Destroy Route
	aboutDestroy: async function (req, res, next) {
		About.findByIdAndRemove(req.params.id, function(err) {
			if(err) {
				req.flash("error", "ENTRY NOT FOUND");
				res.redirect("/about/page/edit");
			} else {
				req.flash("success", "ENTRY SUCCESSFULLY DELETED");
				res.redirect("/about/page/edit");
			}
		});
	},

}; // closes module exports


