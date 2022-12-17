const userModel = require('../model/user.model');
const { success, failed } = require('../helpers/response');

// CRUD USER
const userController = {
  All: (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    userModel
      .All(limit, offset)
      .then((result) => {
        success(res, result, 'success', 'get all user success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'get all user failed');
      });
  },
  Detail: (req, res) => {
    const id = req.params.id;
    userModel
      .Detail(id)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  register: (req, res) => {
    const { id, name, email, password, phone, level, image } = req.body;
    // const photo = req.file.filename
    userModel
      .register(id, name, email, password, phone, level, image)
      .then((result) => {
        success(res, null, 'success', 'insert user success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'get all user failed');
      });
  },

  update_acount: (req, res) => {
    const id = req.params.id;
    const { name, email, password, phone, level, image } = req.body;

    userModel
      .update_acount(id, name, email, password, phone, level, image)
      .then((result) => {
        res.json('akun update');
      })
      .catch((err) => {
        res.json(err);
      });
  },
  delete_acount: (req, res) => {
    const id = req.params.id;
    userModel
      .delete_acount(id)
      .then((result) => {
        res.json('akun dihapus');
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = userController;
