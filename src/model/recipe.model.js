const pool = require('../config/db');

const recipeModel = {
  All: (sort, asc, limit, offset) =>
    new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM tb_recipes order by ${sort} ${asc} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
  listUserByName: (title) => {
    return new Promise((resolve, reject) => {
      pool
        .query(
          `
        SELECT * FROM tb_recipes WHERE lower(title) LIKE lower ('%${title}%')`
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  recipeAll: () => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM tb_recipes`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  Detail_recipe: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM tb_recipes WHERE id = ${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  insert_recipe: (title, ingredient, stepall, image) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO tb_recipes (title, ingredient, stepall, image)
            VALUES ($1, $2, $3, $4)`,
        [title, ingredient, stepall, image],
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  update_recipe: (id, title, ingredient, stepall) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
            UPDATE tb_recipes SET
            title = COALESCE($1, title),
            ingredient = COALESCE($2, ingredient),
            stepall = COALESCE($3, stepall)
            WHERE id = $4
            `,
        [title, ingredient, stepall, id],
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  delete_recipe: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`DELETE FROM tb_recipes WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};

module.exports = recipeModel;
