import pool from '../config/db.js';

export const getContributorById = async(id) => {
    const db = await pool.connect();
  
    try {
        const result = await db.query(
            'SELECT * FROM contributors WHERE id = $1 LIMIT 1',
            [id]
        );
  
        if (result.rows.length > 0) {
            const contributor = result.rows[0];
            return contributor;
        } else {
            return null;
        }
  
    } catch (e) {
        console.error('Error executing query', e);
        throw e;
    } finally {
        db.release();
    }
  };

export const addContributor = async(story_id,user_id) => {
    const db = await pool.connect();
  
    try {
      await db.query('BEGIN');
  
      const result = await db.query(
        'INSERT INTO contributors(story_id, user_id) VALUES($1, $2) RETURNING id, story_id, user_id', 
        [story_id, user_id]
      );
  
      await db.query('COMMIT');
      const contributor = result.rows[0];
      return contributor;
  
    } catch (e) {
      await db.query('ROLLBACK');
      console.error(e);
      throw e;
    } finally {
      db.release();
    }
};

export const getStoryContributors = async(story_id) => {
    const db = await pool.connect();
  
    try {
        const result = await db.query(
            'SELECT contributors.user_id, users.username FROM contributors left join users on contributors.user_id = users.id WHERE story_id = $1',
            [story_id]
        );
  
        return result.rows
  
    } catch (e) {
        console.error('Error executing query', e);
        throw e;
    } finally {
        db.release();
    }
};

export const deleteContributor = async(id) => {
    const db = await pool.connect();
  
    try {
      await db.query('BEGIN');
  
      const result = await db.query(
        'DELETE FROM contributors WHERE id = $1 RETURNING *',
        [id]
      );
      
      await db.query('COMMIT');
      const contributor = result.rows[0];
      return contributor;
  
    } catch (e) {
      await db.query('ROLLBACK');
      console.error(e);
      throw e;
    } finally {
      db.release();
    }
};