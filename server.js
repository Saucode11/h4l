import express from "express";
import cors from "cors";

const app = express();

// ✅ Enable CORS for your Netlify frontend
app.use(
  cors({
    origin: [
      "https://h4l.netlify.app", // your Netlify site
      "http://localhost:5173"    // for local development (optional)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse JSON request bodies
app.use(express.json());

// ✅ Basic test route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend connected successfully!" });
});

// ✅ Example route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from your Render backend!" });
});

// ✅ Fallback for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
