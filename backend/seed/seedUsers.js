const db = require('../db');

async function seedUsers() {
  const users = [
    [1, 'alice', 1000.00],
    [2, 'bob', 500.00],
    [3, 'charlie', 750.00]
  ];

  for (const [user_id, username, balance] of users) {
    await db.query(
      'INSERT INTO users (user_id, username, balance, created_at) VALUES (?, ?, ?, NOW())',
      [user_id, username, balance]
    );
  }

  console.log('✅ Users seeded');
  process.exit();
}

seedUsers();
