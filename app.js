function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (msg === "") return;

  const chatMessages = document.getElementById("chatMessages");

  // user message
  const userMsg = document.createElement("p");
  userMsg.className = "user";
  userMsg.textContent = msg;
  chatMessages.appendChild(userMsg);

  // bot response
  const botMsg = document.createElement("p");
  botMsg.className = "bot";
  botMsg.innerHTML = getBotReply(msg.toLowerCase()); // allow links
  chatMessages.appendChild(botMsg);

  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Bot reply logic
function getBotReply(text) {
  if (text.includes("name")) {
    return "My name is Avinash Singh.";
  } else if (
    text.includes("education") ||
    text.includes("college") ||
    text.includes("study") ||
    text.includes("degree")
  ) {
    return "I am currently pursuing BCA (Bachelor of Computer Applications) at Goel Institute of Higher Studies, Mahavidyalay.";
  } else if (text.includes("skills") || text.includes("technologies")) {
    return "I am skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB,Express.js.";
  } else if (text.includes("project") || text.includes("work")) {
    return "Some of my projects include: Spotify Clone, Weather App, Calculator web Application, and Simon Says Game.";
  } else if (text.includes("email")) {
    return 'You can contact me at <a href="mailto:avinashsingh@gmail.com" style="color:#ffbf00;">avinashsingh@gmail.com</a>';
  } else if (text.includes("phone") || text.includes("number")) {
    return "My contact number is 6388391746";
  } else if (text.includes("location")) {
    return "I am based in Lucknow, Uttar Pradesh, India.";
  } else if (text.includes("resume") || text.includes("cv")) {
    return "You can download my resume from the Resume section above.";
  } else if (text.includes("linkedin")) {
    return 'Here is my LinkedIn profile: <a href="https://www.linkedin.com/in/avinash-singh-62a312384/" target="_blank" style="color:#ffbf00;">LinkedIn</a>';
  } else if (text.includes("github")) {
    return 'Here is my GitHub profile: <a href="https://github.com/avinashsingh88161-sudo" target="_blank" style="color:#ffbf00;">GitHub</a>';
  } else if (text.includes("hello") || text.includes("hi")) {
    return "Hello! You can ask me about my skills, projects, education, contact info, location, resume, LinkedIn, or GitHub.";
  } else {
    return "I am sorry, I can answer questions about my skills, projects, education, contact info, location, resume, LinkedIn, or GitHub.";
  }
}
