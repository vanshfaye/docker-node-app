function showMessage() {
  alert("🚀 App is running successfully on EC2!");
}

async function loadStatus() {
  try {
    const res = await fetch("/api/status");
    const data = await res.json();

    document.getElementById("status").innerHTML = `
      ⏱️ Uptime: ${Math.floor(data.uptime)} sec <br>
      🧠 CPU Load: ${data.cpu[0]} <br>
      💾 Free Memory: ${Math.floor(data.memory / 1024 / 1024)} MB
    `;
  } catch (err) {
    document.getElementById("status").innerText = "Error loading data";
  }
}

// 🔁 Auto refresh
setInterval(loadStatus, 2000);

// First load
loadStatus();