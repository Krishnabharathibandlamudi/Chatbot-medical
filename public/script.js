async function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return;

  addMessage("user", input);
  document.getElementById("userInput").value = "";

  try {
    const res = await fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms: input }),
    });

    const data = await res.json();
    addMessage("bot", `You should consult the ${data.department} department.`);
  } catch (error) {
    console.error("Fetch error:", error);
    addMessage("bot", "❌ Server error. Please try again later.");
  }
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.className = sender;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// ✅ Add this to listen for Enter key
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
