import pool from '../config/db.js';
import bcrypt from 'bcrypt';

export const createUser = async(username,email,password) => {
    const db = await pool.connect();

    try {
      await db.query('BEGIN');
  
      const hashedPassword = await bcrypt.hash(password + '', 10);
  
      const result = await db.query(
        'INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3) RETURNING id, username, email',
        [username, email.toLowerCase(), hashedPassword]
      );
  
      await db.query('COMMIT');
      const user = result.rows[0];
      return user;

    } catch (e) {
      await db.query('ROLLBACK');
      console.error(e);
      throw e;
    } finally {
      db.release();
    }
};

export const getUserByEmail = async(email) => {
    const db = await pool.connect();

    try {
        await db.query('BEGIN');

        const result = await db.query(
            'SELECT id, username, email, password_hash FROM users WHERE email = $1 LIMIT 1',
            [email.toLowerCase()]
        );

        if (result.rows.length > 0) {
            await db.query('COMMIT');
            const user = result.rows[0];
            return user;
        } else {
            await db.query('COMMIT');
            return null;
        }

    } catch (e) {
        await db.query('ROLLBACK');
        console.error('Error executing query', e);
        throw e;
    } finally {
        db.release();
    }
};