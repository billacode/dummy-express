const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
 
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: true,
    max: 2
});

const query = async (queryString, values) => {
    try {
        const client = await pool.connect();
        const results = await pool.query(queryString, values);

        client.release();

        return results;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    query
}
