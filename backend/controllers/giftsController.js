const db = require('../db');

// Получить все подарки
exports.getAllGifts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT g.*, u.username AS owner_name
      FROM gifts g
      JOIN users u ON g.owner_id = u.user_id
    `);
    res.json(rows);
  } catch (error) {
    console.error('Ошибка при получении подарков:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

// Создать подарок
exports.createGift = async (req, res) => {
  const { gift_number, model, symbol, backdrop, price, owner_id } = req.body;

  if (!gift_number || !model || !symbol || !backdrop || !price || !owner_id) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  try {
    const [result] = await db.query(
      `INSERT INTO gifts (gift_number, model, symbol, backdrop, price, owner_id)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [gift_number, model, symbol, backdrop, price, owner_id]
    );

    const [gift] = await db.query('SELECT * FROM gifts WHERE id = ?', [result.insertId]);
    res.status(201).json(gift[0]);
  } catch (error) {
    console.error('Ошибка при создании подарка:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};


