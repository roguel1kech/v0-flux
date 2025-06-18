const express = require('express');
const db = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
  const { telegram_id, gift_id } = req.body;

  try {
    const [[user]] = await db.query('SELECT user_id FROM users WHERE user_id = ?', [telegram_id]);
    if (!user) return res.status(404).json({ error: 'Пользователь не найден' });

    const [[gift]] = await db.query('SELECT * FROM gifts WHERE id = ?', [gift_id]);
    if (!gift) return res.status(404).json({ error: 'Подарок не найден' });

    await db.query(
      `INSERT INTO deals (gift_id, seller_id, buyer_id, price, date)
       VALUES (?, ?, ?, ?, NOW())`,
      [gift.id, gift.owner_id, user.user_id, gift.price]
    );

    await db.query(`UPDATE gifts SET owner_id = ? WHERE id = ?`, [user.user_id, gift.id]);

    res.json({ status: 'ok', deal_id: gift.id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
