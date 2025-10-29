import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ✅ Enable CORS for Netlify frontend and localhost (dev)
app.use(
  cors({
    origin: [
      "https://h4l.netlify.app", // your deployed frontend
      "http://localhost:5173"    // optional for local testing
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse incoming JSON data
app.use(express.json());

// ✅ Define __dirname (for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Example route to confirm backend works
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is connected successfully!" });
});

// ✅ Catch-all route
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
