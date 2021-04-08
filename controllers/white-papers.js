const WhitePapers = require('../models/white-papers');

module.exports = {

	// Index Route
	whitePaperIndex: async function(req, res) {
		WhitePapers.find({}).exec(function (err, allPapers) {
			if (err) {
				req.flash("error", "NO WHITE PAPER FOUND");
				res.redirect("/white-papers");
			} else {
				res.render('./not-public/white-papers/edit', {
					whitePapers: allPapers,
				});
			}
		});
	},

	// New Post Route
	whitePaperNew: async function(req, res) {
		res.render("./not-public/white-papers/new");
	},

// Create Route
	whitePaperCreate: async function (req, res) {
// Create Post
		WhitePapers.create(req.body.whitePaper, function(err, newPapers) {
			if(err){
				res.redirect("./not-public/white-papers/new");
				console.log(err);
			} else {
				req.flash("success", "!!!ENTRY CREATED!!");
				res.redirect("./edit");
			}
		});
	},

	// Show Case Papers Content Pages
	whitePaperShow: async function (req, res, next) {
		let slug = req.params.slug;
		WhitePapers.findOne({slug: slug}).exec(function(err, showPapers){
			if(err){
				res.render('./not-public/white-papers/edit');
			} else {
				res.render("white-papers/show", {whitePaper: showPapers});
			}
		});
	},

	// Show form for editing
	whitePaperEditForm: async function (req, res, next) {
		WhitePapers.findById(req.params.id, function(err, foundPapers) {
			if(err) {
				res.redirect('/white-papers/edit');
			} else {
				res.render('./not-public/white-papers/edit-form', {whitePaper: foundPapers});
			}
		});
	},

	// Update Post Route
	whitePaperUpdate: async function (req, res, next) {
		WhitePapers.findByIdAndUpdate(req.params.id, req.body.whitePaper, function(err, updatedPapers) {
			if(err) {
				res.redirect('./not-public/white-papers/edit');
			} else {
				req.flash("success", "!!!ENTRY UPDATED!!!");
				res.redirect('./edit/' + req.params.id);
			}
		});
	},

	// Destroy Route
	whitePaperDestroy: async function (req, res, next) {
		WhitePapers.findByIdAndRemove(req.params.id, function(err){
			if(err){
				req.flash("error", "ENTRY NOT FOUND");
				res.redirect("/white-papers/edit");
			} else {
				req.flash("success", "ENTRY SUCCESSFULLY DELETED");
				res.redirect("/white-papers/edit");
			}
		});
	},

}; // closes module exports


