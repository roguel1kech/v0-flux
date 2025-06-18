const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());


// Роуты
app.use('/api/gifts', require('./routes/giftsRoutes'));
app.use('/api/deals', require('./routes/dealsRoutes'));
app.use('/api/users', require('./routes/usersRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
