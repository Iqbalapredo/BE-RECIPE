//declate express

const express = require('express');
const router = express.Router();
const { recipeAll, getUserByName, All, Detail_recipe, insert_recipe, update_recipe, delete_recipe } = require('../controller/recipe.controller');

const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin, isCostumer } = require('../middleware/authorization');

const upload = require('../middleware/upload');

router
  .get('/recipe/profile', recipeAll)
  .get('/recipe/', All)
  .get('/recipe/title/:title', getUserByName)
  .get('/recipe/:id', Detail_recipe)
  .post('/recipe', upload, insert_recipe)
  .put('/recipe/:id', upload, update_recipe)
  .delete('/recipe/:id', delete_recipe);

module.exports = router;
