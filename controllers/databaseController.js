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
    max: 20,
    idleTimeoutMillis: 30000
});

const connectDb = async () => {
    
}

const disconnectDb = async () => {

}

const query = async (queryString, values) => {
    try {
        return await pool.query(queryString, values);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    query,
    connectDb,
    disconnectDb
}
