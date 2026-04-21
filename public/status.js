const express = require('express');
const os = require('os');

const app = express();

// Status API
app.get('/status', (req, res) => {

  const uptime = os.uptime();

  const totalMem = os.totalmem();
  const freeMem = os.freemem();

  const usedMem = ((totalMem - freeMem) / totalMem * 100).toFixed(2);

  const cpuLoad = os.loadavg()[0].toFixed(2);

  res.json({
    status: "Running ✅",
    uptime: uptime + " sec",
    memory: usedMem + " %",
    cpu: cpuLoad
  });
});

// Start server
app.listen(4000, () => {
  console.log("🚀 Status API running on port 4000");
});