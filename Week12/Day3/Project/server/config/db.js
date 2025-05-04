import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const DISABLE_SSL = process.env.DB_DISABLE_SSL == 'true'
const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
} = process.env;

const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    max: 10,
    ssl: DISABLE_SSL ? undefined : {
        rejectUnauthorized: false,
      },
});

export default pool;