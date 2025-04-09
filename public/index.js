import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Servir archivos HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/profile.html", (req, res) => {
  res.sendFile(path.join(__dirname, "profile.html"));
});

app.get("/tags.html", (req, res) => {
  res.sendFile(path.join(__dirname, "tags.html"));
});

app.listen(port, () => {
  console.log(`Servidor en: http://localhost:${port}`);
});
