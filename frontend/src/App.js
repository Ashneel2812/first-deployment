// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [word, setWord] = useState('');

  useEffect(() => {
    // Fetch random word from the backend when the component mounts
    const apiUrl = process.env.REACT_APP_BACKEND_URL;
    axios.get(`${apiUrl}/random-word`)
      .then(response => {
        setWord(response.data.word);
      })
      .catch(error => {
        console.error('Error fetching word:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Random Word Generator</h1>
      <p>Random word from the backend: <strong>{word}</strong></p>
    </div>
  );
}

export default App;