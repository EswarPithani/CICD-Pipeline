import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';  // Make sure to create and include the CSS file

function App() {
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://cicd-pipeline-4hmr.onrender.com/api/message')
      .then(res => {
        setMsg(res.data.message);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMsg('Something went wrong!');
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Welcome to My Website</h1>
        <p className="description">This is a simple app that fetches data from the backend and displays a message below.</p>
        <img 
          src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Sample Image" 
          className="app-image" 
        />
      </header>
      <main className="content">
        <h2 className="message">
          {loading ? "Loading..." : msg}
        </h2>
      </main>
      <footer className="footer">
        <p>Created with Eswar</p>
      </footer>
    </div>
  );
}

export default App;
