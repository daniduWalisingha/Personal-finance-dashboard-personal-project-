const {pool} = require("pg");
require("dotenv").config();

const pool = new pool({
    connectionString: process.env.DATABASE_URL,
    // build encrypted connection
    ssl: process.env.NODE_ENV ==="production"
    ?{rejectUnanthorized : false}
    :false
});

module.exports = pool;
