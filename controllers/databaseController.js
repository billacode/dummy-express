const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
 
let pool = null; 

const connectDb = async () => {
    try {
        pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
            ssl: true,
        });

        await pool.connect();
    } catch (error) {
        console.log(error)
    }
}

const disconnectDb = async () => {
    try {
        await pool.end();
        pool = null;
    } catch (error) {
        console.log(error)
    }
}

const query = async (queryString, values) => {
    try {
        return await pool.query(queryString, values);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    query,
    connectDb,
    disconnectDb
}
