const db = require('../db');

async function seedDeals() {
  const deals = [
    [1, 1, 2, 250.00],
    [2, 2, 3, 400.00]
  ];

  for (const [gift_id, seller_id, buyer_id, price] of deals) {
    await db.query(
      `INSERT INTO deals (gift_id, seller_id, buyer_id, price, date)
       VALUES (?, ?, ?, ?, NOW())`,
      [gift_id, seller_id, buyer_id, price]
    );
  }

  console.log('✅ Deals seeded');
  process.exit();
}

seedDeals();
