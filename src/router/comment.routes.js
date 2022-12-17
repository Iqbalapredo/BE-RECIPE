const express = require('express');
const router = express.Router();
const { insert, list, deleteComment } = require('../controller/comment.controller');

const jwtAuth = require('../middleware/jwtAuth');
const { isCostumer, isAdmin } = require('../middleware/authorization');

router.post('/comment', jwtAuth, isCostumer, insert).get('/comment', jwtAuth, isAdmin, list).delete('/comment/:id_comment', jwtAuth, isCostumer, deleteComment);

module.exports = router;
