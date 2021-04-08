const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { formSupport, formGetHelp, formTraining } = require('../controllers/form-support');

/* Processes Form On Downloads pages and Get Help */
router.post('/', asyncErrorHandler(formSupport));

/* Processes form at gethelp/form */
router.post('/form', asyncErrorHandler(formGetHelp));

/* Processes training registration form */
router.post('/register', asyncErrorHandler(formTraining));

module.exports = router;
