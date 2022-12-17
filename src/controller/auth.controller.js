const bcrypt = require('bcrypt');
const userModel = require('../model/user.model');
const { success, failed, successWithtoken } = require('../helpers/response');
const jwtToken = require('../helpers/generateJWT');

module.exports = {
  register: (req, res) => {
    try {
      //tangkap data dari body
      const { id, name, email, phone, password, level, image } = req.body;
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          failed(res, err.message, 'failed', 'failed hash password');
        }

        const data = {
          id,
          name,
          email,
          phone,
          password: hash,
          level,
          image,
        };

        userModel
          .register(data)
          .then((result) => {
            success(res, result, 'success', 'register success');
          })
          .catch((err) => {
            failed(res, err.message, 'failed', 'register failed');
          });
      });
    } catch {
      failed(res, err.message, 'failed', 'internal server error');
    }
  },

  login: async (req, res) => {
    const { name, password } = req.body;
    // model login
    userModel
      .checkUsername(name)
      .then((result) => {
        //console.log(res.rows[0]);
        const user = result.rows[0];
        if (result.rowCount > 0) {
          bcrypt.compare(password, result.rows[0].password).then(async (result) => {
            if (result) {
              const token = await jwtToken({
                name: user.name,
                level: user.level,
              });
              //   console.log(token);
              successWithtoken(res, { token, data: user }, 'succes', 'login succes');
            } else {
              //ketika password salah
              failed(res, null, 'failed', 'username atau password salah');
            }
          });
        } else {
          // ketika username salah
          failed(res, null, 'failed', 'username atau password salah');
        }
      })
      .catch((err) => {
        failed(res, err.message, 'failed', 'internal server error');
      });
  },
};
