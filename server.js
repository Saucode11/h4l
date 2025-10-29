import express from "express";
import cors from "cors";

const app = express();

// ✅ Enable CORS for your Netlify frontend
app.use(
  cors({
    origin: [
      "https://h4l.netlify.app", // your Netlify domain
      "http://localhost:5173"    // optional for local testing
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse JSON
app.use(express.json());

// ✅ Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend connected successfully!" });
});

// ✅ Example API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Render backend!" });
});

// ✅ Catch-all route (no frontend here)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
