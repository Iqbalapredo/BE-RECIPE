// KONEKSI KE PGSQL

// deklare library

const pg = require('pg');
const { DB_USERNAME, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = require('../helpers/env');

const db = new pg.Pool({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

// cek koneksi
db.connect((err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = db;
