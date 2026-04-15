const express = require("express");
const os = require("os");
const app = express();

app.use(express.static("public"));

// 🔥 API for live status
app.get("/api/status", (req, res) => {
  res.json({
    uptime: process.uptime(),
    cpu: os.loadavg(),
    memory: os.freemem()
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});