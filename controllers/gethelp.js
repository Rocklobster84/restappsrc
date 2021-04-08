const GetHelp = require('../models/gethelp');

module.exports = {

	getHelpIndex: async function (req, res, next) {
		res.status(301).redirect('/gethelp/index.html');
	},

	getHelpNew: async function (req, res, next) {
		res.render("./not-public/gethelp/new")
	},

	getHelpCreate: async function (req, res, next) {
		GetHelp.create(req.body.getHelp, function(err, newGetHelp) {
			if(err) {
				console.log(err);
				res.redirect("/gethelp/edit");
			} else {
				res.redirect("/gethelp");
			}
		})
	},

	getHelpShow: async function (req, res, next) {
		let slug = req.params.slug;
		let user = {
			customerID: req.query.customerID,
			name: req.query.name,
			surname: req.query.surname,
			emailaddress: req.query.emailaddress,
			version: req.query.version,
			sysinfo: req.query.sysinfo
		};
		GetHelp.findOne({slug: slug}).exec(function (err, showGetHelp) {
			if (err) {
				console.log(err);
				res.redirect('/gethelp');
			} else {
				res.render("gethelp/index", { getHelp: showGetHelp, user:user});
			}
		});
	},

	// Show page of edit buttons
	getHelpEdit: async function (req, res, next) {
		GetHelp.find({}).sort({_id:-1}).exec(function (err, allGetHelp){
			if(err) {
				res.redirect("/gethelp");
			} else {
				res.render("./not-public/gethelp/edit", {
					getHelp: allGetHelp
				});
			}
		});
	},

	// Show form for Editing
	getHelpEditForm: async function (req, res, next) {
		GetHelp.findById(req.params.id, function(err, foundGetHelp) {
			if(err) {
				res.redirect('/gethelp/page/edit');
			} else {
				res.render('./not-public/gethelp/edit-form', { getHelp: foundGetHelp});
			}
		});
	},

	// Update Route
	getHelpUpdate: async function (req, res, next) {
		GetHelp.findByIdAndUpdate(req.params.id, req.body.getHelp, function(err, updatedGetHelp) {
			if(err) {
				res.redirect('/gethelp/page/edit');
			} else {
				req.flash("success", "!!!ENTRY UPDATED!!!");
				res.redirect('/gethelp/page/edit');
			}
		});
	},

	// Destroy Route
	getHelpDestroy: async function (req, res, next) {
		GetHelp.findByIdAndRemove(req.params.id, function(err) {
			if(err) {
				req.flash("error", "ENTRY NOT FOUND");
				res.redirect("/gethelp/page/edit");
			} else {
				req.flash("success", "ENTRY SUCCESSFULLY DELETED");
				res.redirect("/gethelp/page/edit");
			}
		});
	}

}; // closes module exports
