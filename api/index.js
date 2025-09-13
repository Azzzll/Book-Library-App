const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json');

const app = express();

app.use(cors());

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  return booksData[randomIndex];
}

app.get('/api/random-book', (req, res) => {
  res.json(getRandomBook());
});

app.get('/api/random-book-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  }, 2000);
});

// Экспортируем для Vercel Serverless
module.exports = app;
