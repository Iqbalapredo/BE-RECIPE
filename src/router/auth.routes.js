const express = require('express');
const { login, register } = require('../controller/auth.controller');
const { isVerify } = require('../middleware/authorization');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/register', upload, register).get('/activation/:token', isVerify).post('/login', isVerify, login).put('/forgot', isVerify).put('/reset/:token', isVerify);

module.exports = router;
