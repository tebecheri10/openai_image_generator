const express = require('express')
const { generateimage }  = require('../controllers/openaiControllers')
const router = express.Router();

router.post('/generateimage', generateimage)

module.exports = router