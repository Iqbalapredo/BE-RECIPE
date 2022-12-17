const pool = require('../config/db');

const userModel = {
  All: () =>
    new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM tb_users`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
  Detail: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM tb_users WHERE id = ${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  // router insert
  store: (id, name, email, password, phone, level, image) => {
    return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO tb_users (name, email, password, phone,level, image) VALUES ('${id}', '${name}','${email}', '${password}', '${phone}', '${level}', ${image})`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  register: ({ name, email, password, phone, level, image }) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO tb_users ( name, email, password, phone, level, image )
          VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, email, password, phone, level, image],
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  update_acount: (id, name, email, password, phone, level, image) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
          UPDATE tb_users SET
          name = COALESCE($1, name),
          email = COALESCE($2, email),
          password = COALESCE($3, password),
          phone = COALESCE($4, phone),
          level = COALESCE($5, level),
          image = COALESCE($6, image)
 
          WHERE id = $7
          `,
        [name, email, password, phone, level, image, id],
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  delete_acount: (id) => {
    return new Promise((resolve, reject) => {
      pool.query(`DELETE FROM tb_users WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // model login
  checkUsername: (name) => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM tb_users WHERE name = '${name}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};

module.exports = userModel;
