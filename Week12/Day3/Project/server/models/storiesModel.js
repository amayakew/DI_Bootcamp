import pool from '../config/db.js';

export const getStories = async() => {
    const db = await pool.connect();

    try {
      const result = await db.query('SELECT stories.title, stories.content, stories.id, stories.author_id, users.username FROM stories left join users on stories.author_id = users.id');
      const stories = result.rows;
      return stories;

    } catch (e) {
      console.error(e);
      throw e;
      
    } finally {
      db.release();
    }
};

export const createNewStory = async(title,content,authorId) => {
  const db = await pool.connect();

  try {
    await db.query('BEGIN');

    const result = await db.query(
      'INSERT INTO stories(title, content, author_id) VALUES($1, $2, $3) RETURNING id, title, content, author_id, created_at, updated_at', 
      [title, content, authorId]
    );

    await db.query('COMMIT');
    const story = result.rows[0];
    return story;

  } catch (e) {
    await db.query('ROLLBACK');
    console.error(e);
    throw e;
  } finally {
    db.release();
  }
};

export const getStoryById = async(storyId) => {
  const db = await pool.connect();

  try {
      const result = await db.query(
          'SELECT id, title FROM stories WHERE id = $1 LIMIT 1',
          [storyId]
      );

      if (result.rows.length > 0) {
          const storyId = result.rows[0];
          return storyId;
      } else {
          return null;
      }

  } catch (e) {
      console.error('Error executing query', e);
      throw e;
  } finally {
      db.release();
  }
}


export const updateStory = async(newTitle, newContent, storyId) => {
  const db = await pool.connect();

  try {
    await db.query('BEGIN');

    let result;
    if (newTitle && newContent) {
      result = await db.query(
        'UPDATE stories SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
        [newTitle, newContent, storyId]
      );
    }
    else if (newTitle) {
      result = await db.query(
        'UPDATE stories SET title = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
        [newTitle, storyId]
      );
    }
    else if (newContent) {
      result = await db.query(
        'UPDATE stories SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
        [newContent, storyId]
      );
    }
    else {
      console.log(`Unable to update, please enter data to update`);
      throw new Error('No data provided to update.');
    }
    
    await db.query('COMMIT');
    const story = result.rows[0];
    return story;

  } catch (e) {
    await db.query('ROLLBACK');
    console.error(e);
    throw e;
  } finally {
    db.release();
  }
};

export const deleteStory = async(storyId) => {
  const db = await pool.connect();

  try {
    await db.query('BEGIN');

    const result = await db.query(
      'DELETE FROM stories WHERE id = $1 RETURNING *',
      [storyId]
    );
    
    await db.query('COMMIT');
    const story = result.rows[0];
    return story;

  } catch (e) {
    await db.query('ROLLBACK');
    console.error(e);
    throw e;
  } finally {
    db.release();
  }
};