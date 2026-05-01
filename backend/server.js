// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());  // This is to allow communication from the frontend (React)

const words = ['apple', 'banana', 'cherry', 'dog', 'elephant', 'frog', 'giraffe', 'hat', 'island', 'jungle'];

app.get('/random-word', (req, res) => {
    // Pick a random word from the words array
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json({ word: randomWord });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});