const pool = require('../config/db');

const commentModel = {
  list: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM comment', (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  insert: (id_comment, id_user, id_recipe, description) => {
    return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO comment (id_comment, id_user, id_recipe, description) VALUES (${id_comment}, ${id_user}, ${id_recipe}, '${description}')`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  deleteComment: (id_comment) => {
    return new Promise((resolve, reject) => {
      pool.query(`DELETE FROM comment WHERE id_comment = ${id_comment}`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};

module.exports = commentModel;
