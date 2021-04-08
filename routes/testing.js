const express = require('express');
const router = express.Router();

// GET Test RC
router.get('/test-rc', function(req, res){
	res.render("not-public/test-rc")
});

// GET Test MR
router.get('/test-mr', function(req, res){
	res.render("not-public/test-mr")
});


module.exports = router;
