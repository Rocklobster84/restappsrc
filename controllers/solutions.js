const Solutions = require('../models/solutions');
const chalk = require('chalk');

module.exports = {

solutionIndex:function(req, res, next) {

	// Search Function
	function escapeRegex(text) {
		return text.replace(/[=[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	}

	// Pagination variables
	//let perPage = 20;
	//let pageQuery = parseInt(req.query.page);
	//let pageNumber = pageQuery ? pageQuery : 1;

	if(req.query.search) {

		const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		// Get news from DB after search and paginate
		Solutions.find({abstract: regex}).sort({postDate: -1})/*.skip((perPage * pageNumber) - perPage).limit(perPage)*/.exec(function (err, allSolutions) {
			Solutions.countDocuments({abstract: regex}).exec(function (err, count) {
				if (err) {
					req.flash("error", "No results for that query.");
					res.render("solutions/index");
				} else {
					if (allSolutions.length < 1) {
						req.flash("error", "No results match that query, please try again.")
						res.redirect("/solutions");
					}
					res.render("solutions/index", {
						Solutions: allSolutions,
						//current: pageNumber,
						//pages: Math.ceil(count / perPage),
						tags: false,
						search: req.query.search
					});
				}
			});
		})
	} else if(req.query.tags) {

  let tagsEntered = req.query.tags;

		Solutions.find({ tags: { "$all": tagsEntered }}).sort({_id:-1})./*skip((perPage * pageNumber) - perPage).limit(perPage).*/exec(function (err, allSolutions) {
		Solutions.countDocuments({ tags: { "$all": tagsEntered }}).exec(function (err, count) {
			if (err) {
				req.flash("error", "No results for that query.");
				res.render("solutions/index");
			} else {
				if (allSolutions.length < 1) {
					req.flash("error", "No results match that query, please try again.")
					res.redirect("/solutions");
				}
				res.render("solutions/index", {
					Solutions: allSolutions,
					//current: pageNumber,
					//pages: Math.ceil(count / perPage),
					search: false,
					tags: [tagsEntered]
				});
			}
		});
	})
} else {
Solutions.find({}).sort({_id: -1})./*skip((perPage * pageNumber) - perPage).limit(perPage).*/exec(function (err, allSolutions) {
	Solutions.countDocuments().exec(function (err, count) {
		if (err) {
			req.flash("error", "No results for that query.");
			res.redirect("/solutions");
		} else {
			res.render('solutions/index', {
				Solutions: allSolutions,
				//current: pageNumber,
				//pages: Math.ceil(count / perPage),
				search: false,
				tags: false
			});
		}
	});
});
}
},

	// New Post Route
	solutionNew: async function(req, res) {
		res.render("./not-public/solutions/solutions-new");
	},

	// Create Route
	solutionCreate: async function (req, res) {
		Solutions.create(req.body.solutions, function(err, newSolution) {
			if(err){
				res.redirect("./not-public/solutions/solutions-new");
				console.log(err);
			} else {
				res.redirect("/solutions");
			}
		});
	},

	// Show page of edit buttons
	solutionEdit: async function (req, res, next) {

			Solutions.find({}).sort({_id: -1}).exec(function (err, allSolutions) {
				Solutions.countDocuments().exec(function (err, count) {
					if (err) {
						res.redirect("/solutions");
						console.log(err);
					} else {
						res.render('./not-public/solutions/solutions-edit', {
							Solutions: allSolutions
						});
					}
				});
			});
	},

	// Show form for editing
	solutionEditForm: async function (req, res, next) {
  Solutions.findById(req.params.id, function(err, foundSolution) {
  	if(err) {
  		res.redirect('./not-public/solutions/solutions-edit');
	  } else {
  		res.render('./not-public/solutions/solutions-edit-form', {solution: foundSolution});
	  }
  });
	},

	// Update Post Route
	solutionUpdate: async function (req, res, next) {
		Solutions.findByIdAndUpdate(req.params.id, req.body.solution, function(err, updatedSolution) {
			if(err) {
				res.redirect('./not-public/solutions/solutions-edit');
			} else {
				req.flash("success", "!!!ENTRY UPDATED!!!");
				res.redirect('./edit/' + req.params.id);
			}
		});
	},

	// Destroy Route
	solutionDestroy: async function (req, res, next) {
		Solutions.findByIdAndRemove(req.params.id, function(err){
			if(err){
				req.flash("error", "ENTRY NOT FOUND");
				res.redirect("/solutions/edit");
			} else {
				req.flash("success", "ENTRY SUCCESSFULLY DELETED");
				res.redirect("/solutions/edit");
			}
		});
	},
}; // Closes module exports
