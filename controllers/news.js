const NewsPosts = require('../models/news');

module.exports = {

	newsIndex: function (req, res, next) {

		// Search Function
		function escapeRegex(text) {
			return text.replace(/[=[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		}

		let perPage = 20;
		let pageQuery = parseInt(req.query.page);
		let pageNumber = pageQuery ? pageQuery : 1;

if(req.query.search) {
	const regex = new RegExp(escapeRegex(req.query.search), 'gi');
	// Get news from DB after search and paginate
	NewsPosts.find({newsRelease: regex}).sort({postDate: -1}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function (err, allNews) {
		NewsPosts.countDocuments({newsRelease: regex}).exec(function (err, count) {
			if (err) {
				req.flash("error", "No results for that query.");
				res.render("news/index");
			} else {
				if (allNews.length < 1) {
					req.flash("error", "No results match that query, please try again.")
					res.redirect("/news");
				}
				res.render("news/index", {
					NewsPosts: allNews,
					current: pageNumber,
					pages: Math.ceil(count / perPage),
					search: req.query.search
				});
			}
		});
	})
} else if(req.query.year) {
	let year = [req.query.year || []];

	NewsPosts.find({year:{$in: year}}).sort({postDate: -1}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function (err, allNews){
		NewsPosts.countDocuments({year:{$in: year}}).exec(function (err, count) {
			if (err) {
				req.flash("error", "No results for that query.");
				res.render("news/index");
			} else {
				res.render("news/index", {
					NewsPosts: allNews,
					current: pageNumber,
					pages: Math.ceil(count / perPage),
					search: false,
					year: req.query.year
				});
			}
		});
	})
	} else {
	// Get all news from DB
	NewsPosts.find({}).sort({postDate: -1}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function(err, allNews){
		NewsPosts.countDocuments().exec(function(err, count) {
			if(err) {
				req.flash("error", "No results for that query.");
				res.redirect("/news");
			} else {
				res.render("news/index", {
					NewsPosts: allNews,
					current: pageNumber,
					pages: Math.ceil(count / perPage),
					search: false,
					year: false
				});
			}
		});
	});
}
	},

	// New Post Route
	newsNew: async function(req, res) {
		res.render("./not-public/news/news-new");
	},

// Create Route
	newsCreate: async function (req, res) {
// Create Post
		NewsPosts.create(req.body.news, function(err, newNews) {
			if(err){
				res.redirect("./not-public/news/news-new");
				console.log(err);
			} else {
				res.redirect("/news");
			}
		});
	},

	// Show News Release Posts
	newsShow: async function (req, res, next)  {
		let slug = req.params.slug;
			NewsPosts.findOne({slug: slug}).exec(function (err, showNews) {
				if (err) {
					res.redirect('/');
				} else {
					res.render("news/show", {news: showNews});
				}
			});
	},

// Show page of edit buttons
	newsEdit: async function (req, res, next) {
		NewsPosts.find({}).sort({_id: -1}).exec(function (err, allNews) {
			NewsPosts.countDocuments().exec(function (err, count) {
				if (err) {
					res.redirect("/news");
					console.log(err);
				} else {
					res.render('./not-public/news/news-edit', {
						News: allNews
					});
				}
			});
		});
	},

	// Show form for editing
	newsEditForm: async function (req, res, next) {
		NewsPosts.findById(req.params.id, function(err, foundNews) {
			if(err) {
				res.redirect('./not-public/news/news-edit');
			} else {
				res.render('./not-public/news/news-edit-form', {news: foundNews});
			}
		});
	},

	// Update Post Route
	newsUpdate: async function (req, res, next) {
		NewsPosts.findByIdAndUpdate(req.params.id, req.body.news, function(err, updatedNews) {
			if(err) {
				res.redirect('./not-public/news/news-edit');
			} else {
				req.flash("success", "!!!ENTRY UPDATED!!!");
				res.redirect('./edit');
			}
		});
	},

	// Destroy Route
	newsDestroy: async function (req, res, next) {
		NewsPosts.findByIdAndRemove(req.params.id, function(err){
			if(err){
				req.flash("error", "ENTRY NOT FOUND");
				res.redirect("/news/edit");
			} else {
				req.flash("success", "ENTRY SUCCESSFULLY DELETED");
				res.redirect("/news/edit");
			}
		});
	},

}; // closes module exports


