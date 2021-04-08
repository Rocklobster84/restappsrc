const PWProducts = require('../models/pointwise');

module.exports = {

pwIndex: async function (req, res, next) {
	res.status(301).redirect('/pointwise/software');
},

pwNew: async function (req, res, next) {
  res.render("./not-public/pointwise/pw-new")
},

pwCreate: async function (req, res, next) {
PWProducts.create(req.body.pw, function(err, newPW) {
	if(err) {
		console.log(err);
		res.redirect("/pointwise/edit");
	} else {
		res.redirect("/pointwise");
	}
})
},

	pwShow: async function (req, res, next) {
	let slug = req.params.slug;
	PWProducts.findOne({slug: slug}).exec(function (err, showPW) {
		if (err) {
			console.log(err);
			res.redirect('/pointwise');
		} else {
			res.render("pointwise/show", { pw: showPW});
		}
	});
	},

	pwEdit: async function (req, res, next) {
	PWProducts.find({}).sort({_id:-1}).exec(function (err, allPW){
		if(err) {
			res.redirect("/pointwise");
		} else {
			res.render("./not-public/pointwise/pw-edit", {
				pw: allPW
			});
	}
	});
},

// Show form for Editing
	pwEditForm: async function (req, res, next) {
	PWProducts.findById(req.params.id, function(err, foundPW) {
		if(err) {
			res.redirect('/pointwise/product/edit');
		} else {
			res.render('./not-public/pointwise/pw-edit-form', { pw: foundPW});
		}
	});
	},

	// Update Route
	pwUpdate: async function (req, res, next) {
	PWProducts.findByIdAndUpdate(req.params.id, req.body.pw, function(err, updatedPW) {
		if(err) {
			res.redirect('/pointwise/product/edit');
		} else {
			req.flash("success", "!!!ENTRY UPDATED!!!");
			res.redirect('/pointwise/product/edit');
		}
	});
	},

	// Destroy Route
	pwDestroy: async function (req, res, next) {
	PWProducts.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			req.flash("error", "ENTRY NOT FOUND");
			res.redirect("/pointwise/product/edit");
		} else {
			req.flash("success", "ENTRY SUCCESSFULLY DELETED");
			res.redirect("/pointwise/product/edit");
		}
	});
	}

}; // closes module exports
