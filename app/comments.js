// pages/api/comments.js
import { executeQuery } from '../../db';
import { TYPES } from 'tedious';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, comment } = req.body;

    if (!name || !comment) {
      return res.status(400).json({ message: 'Name and comment are required' });
    }

    const query = `
      INSERT INTO Comments (name, comment)
      VALUES (@name, @comment);
    `;

    const params = [
      { name: 'name', type: TYPES.NVarChar, value: name },
      { name: 'comment', type: TYPES.NVarChar, value: comment },
    ];

    executeQuery(query, params, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(200).json({ message: 'Comment added successfully' });
    });
  } else if (req.method === 'GET') {
    const query = `SELECT * FROM Comments ORDER BY created_at DESC;`;

    executeQuery(query, [], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(200).json(result);
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
