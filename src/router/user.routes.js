// deklare express
const express = require('express');
const router = express.Router();

const { All, Detail, update_acount, delete_acount } = require('../controller/user.controller');
const { register, login } = require('../controller/auth.controller');
const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin, isCostumer } = require('../middleware/authorization');
const upload = require('../middleware/upload');

router
  .get('/user', All)
  .get('/user/:id', Detail)

  .put('/user/:id', upload, update_acount)
  .delete('/user/:id', jwtAuth, isCostumer, delete_acount)
  //login
  .post('/login', login)
  //register
  .post('/register', upload, register);
module.exports = router;
