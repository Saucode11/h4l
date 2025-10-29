const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Serve static files from 'public' (place your frontend build here)
app.use(express.static(path.join(__dirname, 'public')));

// Example API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// For client-side routing (React Router), fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
