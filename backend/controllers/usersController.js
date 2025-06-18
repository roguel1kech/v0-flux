const db = require('../db');

// Получить всех пользователей
exports.getAllUsers = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users');
  res.json(rows);
};

// Создать пользователя
exports.createUser = async (req, res) => {
  const { user_id, username, balance } = req.body;
  await db.query(
    `INSERT INTO users (user_id, username, balance, created_at)
     VALUES (?, ?, ?, NOW())`,
    [user_id, username, balance]
  );
  const [user] = await db.query('SELECT * FROM users WHERE user_id = ?', [user_id]);
  res.status(201).json(user[0]);
};
