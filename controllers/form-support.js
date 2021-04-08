const nodemailer = require('nodemailer');
const unirest = require('unirest');

module.exports = {

	formSupport: async function (req, res, next) {
		async function main() {

			const support_msg = `
      <html><head><style> body {font-family: Verdana, sans-serif; font-size:10pt;} h2 {color:#005dab; font-size:14pt;} h3 {color:#005dab; font-size:12pt;} p {margin: 0em;}</style></head>
      <body>
      <h3>Contact Information</h3>
        <p><strong>Customer ID:</strong>&nbsp; ${req.body.customerID}</p>
        <p><strong>Name:</strong>&nbsp; ${req.body.name} ${req.body.surname}</p>
        <p><strong>Email:</strong>&nbsp; ${req.body.emailaddress}</p>
      <h3>Details</h3>
        <p>${req.body.comments}</p>
      </body>
      </html>`;

			const subject_line = `Support Request from ${req.body.customerID}`;
			const comments = req.body.comments;
			const sender_ip = "34.204.123.83";

			// check for spam
			unirest.post("https://rapidapi.p.rapidapi.com/v1/spamdetection")
					.header("content-type", "application/json")
					.header("X-RapidAPI-Host", "oopspam.p.rapidapi.com")
					.header("X-RapidAPI-Key", "b783dfe062msh4b44e45edf22a28p1a0211jsnec013e2c8688")
					.send({"sender_ip": sender_ip, "content": comments})
					.end(function (result) {
						console.log(result.status, result.headers, result.body);
						if (result.status !== 200) {
							// handle the error
							return console.log(result.body);
						}
						if (result.body.Score < 3) {
							// create reusable transporter object using the default SMTP transport
							let transporter = nodemailer.createTransport({
								host: 'mail.pointwise.com',
								port: 587,
								secure: false, // true for 465, false for other ports
								auth: {
									user: 'nodemail@pointwise.com',
									pass: 'w2w@*?k@t_W$7ZhN'
								}
							});

							// send mail with defined transport object
							let mailOptions = {
								from: '"Webmaster" <nodemail@pointwise.com>', // sender address
								to: 'webforms@pointwise.com', // list of receivers
								cc: 'support@pointwise.com',
								subject: subject_line, // Subject line
								html: support_msg, // html body
								headers: {
									'X-Priority': '1 (Highest)',
									'X-MSMail-Priority': 'High',
									'Importance': 'High',
								},
								disableFileAccess: true,
								disableUrlAccess: true
							};

							transporter.sendMail(mailOptions, (error, info) => {
								if (error) {
									return console.log(error);
								}
								console.log('Message sent: %s', info.response);
								res.redirect("/confirmation");
							});
						}
					})
		}

		main().catch(console.error);
	},

	formGetHelp: async function (req, res, next) {
		async function main() {

			const support_msg = `
      <html><head><style> body {font-family: Verdana, sans-serif; font-size:10pt;} h2 {color:#005dab; font-size:14pt;} h3 {color:#005dab; font-size:12pt;} p {margin: 0em;}</style></head>
      <body>
      <h3>Contact Information</h3>
        <p><strong>Customer ID:</strong>&nbsp; ${req.body.customerID}</p>
        <p><strong>Name:</strong>&nbsp; ${req.body.name} ${req.body.surname}</p>
        <p><strong>Email:</strong>&nbsp; ${req.body.emailaddress}</p>
        <p><strong>Pointwise Version:</strong>&nbsp; ${req.body.version}</p>
        <p><strong>System Info:</strong>&nbsp; ${req.body.sysinfo}</p>
      <h3>Details</h3>
        <p>${req.body.comments}</p>
      </body>
      </html>`;

			const subject_line = `Support Request from ${req.body.customerID}`;
			const comments = req.body.comments;
			const sender_ip = "34.204.123.83";

			// check for spam
			unirest.post("https://rapidapi.p.rapidapi.com/v1/spamdetection")
					.header("content-type", "application/json")
					.header("X-RapidAPI-Host", "oopspam.p.rapidapi.com")
					.header("X-RapidAPI-Key", "b783dfe062msh4b44e45edf22a28p1a0211jsnec013e2c8688")
					.send({"sender_ip": sender_ip, "content": comments})
					.end(function (result) {
						console.log(result.status, result.headers, result.body);
						if (result.status !== 200) {
							// handle the error
							return console.log(result.body);
						}
						if (result.body.Score < 3) {
							// create reusable transporter object using the default SMTP transport
							let transporter = nodemailer.createTransport({
								host: 'mail.pointwise.com',
								port: 587,
								secure: false, // true for 465, false for other ports
								auth: {
									user: 'nodemail@pointwise.com',
									pass: 'w2w@*?k@t_W$7ZhN'
								}
							});

							// send mail with defined transport object
							let mailOptions = {
								from: '"Webmaster" <nodemail@pointwise.com>', // sender address
								to: 'webforms@pointwise.com', // list of receivers
								cc: 'support@pointwise.com',
								subject: subject_line, // Subject line
								html: support_msg, // html body
								headers: {
									'X-Priority': '1 (Highest)',
									'X-MSMail-Priority': 'High',
									'Importance': 'High',
								},
								disableFileAccess: true,
								disableUrlAccess: true
							};

							transporter.sendMail(mailOptions, (error, info) => {
								if (error) {
									return console.log(error);
								}
								console.log('Message sent: %s', info.response);
								res.redirect("/confirmation");
							});
						}
					})
		}

		main().catch(console.error);
	},

	formTraining: async function (req, res, next) {
		async function main() {
			router.post(
					[ '/register', '/register.html' ],
					[ body('email').isEmail().normalizeEmail(), body('text').not().isEmpty().trim().escape() ],
					function(req, res, next) {
						const training_msg = `
      <html><head><style> body {font-family: Verdana, sans-serif; font-size:10pt;} h2 {color:#005dab; font-size:14pt;} h3 {color:#005dab; font-size:12pt;} p {margin: 0em;}</style></head>
      <body>
      <h3>Contact Information</h3>
        <p><strong>Name:</strong>&nbsp; ${req.body.name} ${req.body.surname}</p>
        <p><strong>Department:</strong>&nbsp; ${req.body.department}</p>
        <p><strong>Title:</strong>&nbsp; ${req.body.title}</p>
        <p><strong>Email:</strong>&nbsp; ${req.body.emailaddress}</p>
        <p><strong>Phone:</strong>&nbsp; ${req.body.countrycode} - ${req.body.areacode} - ${req.body.phonenumber}</p>
        <p><strong>T-Shirt Size:</strong>&nbsp; ${req.body.tshirt}</p>
      <h3>Company Information</h3>
        <p><strong>Customer ID:</strong>&nbsp; ${req.body.customerID}</p>
        <p><strong>Company Name:</strong>&nbsp; ${req.body.companyname}</p>
      <h3>Training Information</h3>
        <p><strong>Do they need a laptop?</strong> ${req.body.laptop}</p>
        <p><strong>Do they have special dietary needs?</strong> ${req.body.dietneeds}</p>
        <p><strong>Dietary needs description:</strong> ${req.body.specialdietneeds}</p>
        <p><strong>Special Accommodations</strong> ${req.body.comments}</p>
      </body>
      </html>`;

						const subject_line = `Complimentary Training Request Information`;

						// create reusable transporter object using the default SMTP transport
						let transporter = nodemailer.createTransport({
							host: 'mail.pointwise.com',
							port: 587,
							secure: false, // true for 465, false for other ports
							auth: {
								user: 'nodemail@pointwise.com',
								pass: 'w2w@*?k@t_W$7ZhN'
							}
						});

						// send mail with defined transport object
						let mailOptions = {
							from: '"Webmaster" <nodemail@pointwise.com>', // sender address
							to: 'webforms@pointwise.com', // list of receivers
							cc: 'training@pointwise.com',
							subject: subject_line, // Subject line
							html: training_msg, // html body
							headers: {
								'X-Priority': '1 (Highest)',
								'X-MSMail-Priority': 'High',
								Importance: 'High'
							},
							disableFileAccess: true,
							disableUrlAccess: true
						};

						// verify connection configuration
						transporter.verify(function(error, success) {
							if (error) {
								console.log(error);
							} else {
								console.log('Server is ready to take our messages');
							}
						});

						transporter.sendMail(mailOptions, (error, info) => {
							if (error) {
								return console.log(error);
							}
							console.log('Message sent: %s', info.response);
							res.redirect('/confirmation');
						});
					}
			);
		}

		main().catch(console.error);
	}
}; // closes module exports
