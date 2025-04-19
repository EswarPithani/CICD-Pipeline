const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors({
  origin: 'https://cicd-pipeline-git-main-eswarpithanis-projects.vercel.app', // your frontend URL
  methods: 'GET,POST',
}));

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
