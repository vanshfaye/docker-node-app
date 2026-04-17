const express = require('express');
const os = require('os');

const app = express();

app.get('/status', (req, res) => {
  const uptime = os.uptime();
  const memory = ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2);

  res.json({
    status: "Running ✅",
    uptime: uptime,
    memory: memory + "%"
  });
});

app.listen(4000, () => {
  console.log("Status API running on port 4000");
});