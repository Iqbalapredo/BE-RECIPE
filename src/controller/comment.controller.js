const commentModel = require('../model/comment.model');
const { success, failed } = require('../helpers/response');

const commentController = {
  list: (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    commentModel
      .list(limit, offset)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  insert: (req, res) => {
    const { id_comment, id_user, id_recipe, description } = req.body;
    commentModel
      .insert(id_comment, id_user, id_recipe, description)
      .then((result) => {
        success(res, null, 'success', 'insert user success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'get all user failed');
      });
  },
  deleteComment: (req, res) => {
    const id_comment = req.params.id_comment;
    commentModel
      .deleteComment(id_comment)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
module.exports = commentController;
