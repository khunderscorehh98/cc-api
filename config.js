require('dotenv').config();  // Load environment variables from .env file
const mysql = require('mysql2');

const dbConfig = mysql.createPool({
    host: process.env.DB_HOST,         // Use DB_HOST from .env
    user: process.env.DB_USER,         // Use DB_USER from .env
    password: process.env.DB_PASSWORD, // Use DB_PASSWORD from .env
    database: process.env.DB_NAME,     // Use DB_NAME from .env
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the connection pool
module.exports = dbConfig;
