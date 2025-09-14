const express = require("express");
const cors = require("cors");
const app = express();
const booksData = require("./data/books.json");

app.use(cors());
app.use(express.json()); // Добавьте это для обработки JSON

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  return booksData[randomIndex];
}

app.post("/api/random-book", (req, res) => {
  res.json(getRandomBook());
});

app.post("/api/random-book-delayed", (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  }, 2000);
});

// Локальный запуск
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Экспортируем для Vercel Serverless
module.exports = app;
