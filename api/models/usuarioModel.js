import db from '../db.js';

export const buscarTodosUsuarios = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
