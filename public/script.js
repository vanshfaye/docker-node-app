async function fetchStatus() {
  try {
    const res = await fetch('/status');
    const data = await res.json();

    document.getElementById("status").innerHTML = `
      <p>🟢 ${data.status}</p>
      <p>⏱ Uptime: ${data.uptime}s</p>
      <p>💾 Memory: ${data.memory}</p>
    `;
  } catch {
    document.getElementById("status").innerHTML = "❌ Server Down";
  }
}

fetchStatus();
setInterval(fetchStatus, 5000);