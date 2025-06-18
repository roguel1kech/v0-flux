const db = require('../db');

// Получить все сделки
exports.getAllDeals = async (req, res) => {
  const [rows] = await db.query(`
    SELECT d.*, 
           g.model AS gift_model,
           seller.username AS seller_name,
           buyer.username AS buyer_name
    FROM deals d
    JOIN gifts g ON d.gift_id = g.id
    JOIN users seller ON d.seller_id = seller.user_id
    JOIN users buyer ON d.buyer_id = buyer.user_id
  `);
  res.json(rows);
};

// Создать сделку
exports.createDeal = async (req, res) => {
  const { gift_id, seller_id, buyer_id, price } = req.body;

  // Сохраняем сделку
  const [result] = await db.query(
    `INSERT INTO deals (gift_id, seller_id, buyer_id, price, date)
     VALUES (?, ?, ?, ?, NOW())`,
    [gift_id, seller_id, buyer_id, price]
  );

  // Передаём подарок новому владельцу
  await db.query(`UPDATE gifts SET owner_id = ? WHERE id = ?`, [buyer_id, gift_id]);

  const [deal] = await db.query('SELECT * FROM deals WHERE gift_id = ?', [gift_id]);
  res.status(201).json(deal[0]);
};
