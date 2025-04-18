import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return <h1>{msg || "Loading..."}</h1>;
}

export default App;
