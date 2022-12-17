const recipeModel = require('../model/recipe.model');
const { success, failed } = require('../helpers/response');

const recipeController = {
  All: (req, res) => {
    const sort = req.query.sort;
    const asc = req.query.asc;
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    recipeModel
      .All(sort, asc, limit, offset)
      .then((result) => {
        success(res, result.rows, 'success', 'get all user success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'get all user failed');
      });
  },

  getUserByName: (req, res) => {
    const title = req.params.title;
    recipeModel
      .listUserByName(title)
      .then((result) => {
        success(res, result.rows, 'success', 'success get data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed get data');
      });
  },

  recipeAll: (req, res) => {
    recipeModel
      .recipeAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  Detail_recipe: (req, res) => {
    const id = req.params.id;
    recipeModel
      .Detail_recipe(id)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  insert_recipe: (req, res) => {
    const { title, ingredient, stepall } = req.body;
    const image = req.file.filename;
    // const stepall = req.file.filename;

    recipeModel
      .insert_recipe(title, ingredient, stepall, image)
      .then((result) => {
        success(res, null, 'success', 'insert recipe success');
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'get all recipe failed');
      });
  },
  update_recipe: (req, res) => {
    const id = req.params.id;
    const { title, ingredient, stepall } = req.body;

    recipeModel
      .update_recipe(id, title, ingredient, stepall)
      .then((result) => {
        res.json('data Update');
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete_recipe: (req, res) => {
    const id = req.params.id;
    recipeModel
      .delete_recipe(id)
      .then((result) => {
        res.json(' Delete');
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = recipeController;
