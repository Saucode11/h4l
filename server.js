const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// ✅ Allow Netlify frontend to access this backend
app.use(cors({
  origin: [
    'https://your-netlify-site.netlify.app', // 🔁 replace with your real Netlify site URL
    'http://localhost:5173' // optional: for local development (Vite default)
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to parse JSON if your app needs it
app.use(express.json());

// ✅ Serve static frontend files if needed
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Example route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ✅ Fallback route for frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
