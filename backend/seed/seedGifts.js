const db = require('../db');

async function seedGifts() {
  const gifts = [
    [1001, 'Golden Watch', 'GW001', 'black', 1, 250.00],
    [1002, 'Smartphone', 'SP002', 'white', 2, 400.00],
    [1003, 'VR Headset', 'VR003', 'blue', 1, 350.00]
  ];

  for (const [gift_number, model, symbol, backdrop, owner_id, price] of gifts) {
    await db.query(
      `INSERT INTO gifts (gift_number, model, symbol, backdrop, owner_id, price)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [gift_number, model, symbol, backdrop, owner_id, price]
    );
  }

  console.log('✅ Gifts seeded');
  process.exit();
}

seedGifts();
