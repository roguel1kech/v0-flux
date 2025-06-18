## Структура backend
├── backend/               # Node.js backend (Express + MySQL)
│   ├── controllers/       # Обработка запросов (API-логика)
│   ├── routes/            # Эндпоинты API
│   ├── models/            # Модели и работа с БД
│   ├── migrations/        # SQL-миграции для создания таблиц
│   ├── seed/              # Тестовые данные (наполнение БД)
│   └── .env               # Переменные окружения

## Команды для запуска тестов seed:
 ```
node seed/seedUsers.js
node seed/seedGifts.js
node seed/seedDeals.js
 ```