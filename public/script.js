const text = "Docker | AWS | CI/CD | Automation";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

async function fetchStatus() {
  try {
    const res = await fetch('/status');
    const data = await res.json();

    document.getElementById("status").innerHTML = `
      🟢 ${data.status}<br>
      💾 Memory: ${data.memory}<br>
      ⚙️ CPU: ${data.cpu}
    `;
  } catch {
    document.getElementById("status").innerHTML = "❌ Server Down";
  }
}

fetchStatus();
setInterval(fetchStatus, 5000);