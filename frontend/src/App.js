import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // External CSS file for styling

function App() {
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API call to fetch message
    axios.get('http://localhost:5000/api/message')
      .then(res => {
        setMsg(res.data.message);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch message. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My Informative Website</h1>
        <p>Your API-powered message:</p>
      </header>

      <main className="app-main">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div> {/* Simple spinner */}
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <h2>{msg}</h2>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
}

export default App;
