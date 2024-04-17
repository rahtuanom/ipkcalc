// backend/database/db.js

const mysql = require('mysql2/promise');

// Konfigurasi koneksi ke database
const connection = mysql.createPool({
  MYSQLHOST: 'viaduct.proxy.rlwy.net',
  MYSQLUSER: 'root', // Ganti dengan username Anda
  MYSQLPASSWORD: 'bvfYCApudALQPDZKdKifJWnkBKXnSXKO', // Ganti dengan password Anda
  MYSQLDATABASE: 'railway' // Ganti dengan nama database Anda
});

module.exports = connection;
