const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
