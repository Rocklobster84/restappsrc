const CaseStudies = require('../models/case-studies');

module.exports = {

	// Index Route
	studyIndex: async function(req, res) {
		CaseStudies.find({}).exec(function (err, allStudies) {
				if (err) {
					req.flash("error", "NO CASE STUDY FOUND");
					res.redirect("/case-studies");
				} else {
					res.render('./not-public/case-studies/study-edit', {
						studies: allStudies,
					});
				}
		});
	},

	// New Post Route
	studyNew: async function(req, res) {
		res.render("./not-public/case-studies/study-new");
	},

// Create Route
	studyCreate: async function (req, res) {
// Create Post
		CaseStudies.create(req.body.study, function(err, newStudy) {
			if(err){
				res.redirect("./not-public/case-studies/study-new");
				console.log(err);
			} else {
				req.flash("success", "!!!ENTRY CREATED!!");
				res.redirect("./edit");
			}
		});
	},

	// Show Case Study Content Pages
	studyShow: async function (req, res, next) {
		CaseStudies.findById(req.params.id).exec(function(err, showStudy){
			if(err){
				res.render('./not-public/case-studies/case-studies/study-edit');
			} else {
				res.render("case-studies/show", {study: showStudy});
			}
		});
	},

	// Show form for editing
	studyEditForm: async function (req, res, next) {
		CaseStudies.findById(req.params.id, function(err, foundStudy) {
			if(err) {
				res.redirect('/case-studies/edit');
			} else {
				res.render('./not-public/case-studies/study-edit-form', {study: foundStudy});
			}
		});
	},

	// Update Post Route
	studyUpdate: async function (req, res, next) {
		CaseStudies.findByIdAndUpdate(req.params.id, req.body.study, function(err, updatedStudy) {
			if(err) {
				res.redirect('./not-public/case-studies/study-edit');
			} else {
				req.flash("success", "!!!ENTRY UPDATED!!!");
				res.redirect('./edit/' + req.params.id);
			}
		});
	},

	// Destroy Route
	studyDestroy: async function (req, res, next) {
		CaseStudies.findByIdAndRemove(req.params.id, function(err){
			if(err){
				req.flash("error", "ENTRY NOT FOUND");
				res.redirect("/case-studies/edit");
			} else {
				req.flash("success", "ENTRY SUCCESSFULLY DELETED");
				res.redirect("/case-studies/edit");
			}
		});
	},

}; // closes module exports


