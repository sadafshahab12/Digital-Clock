function greet() {
  const userTime = parseInt(document.getElementById("userTime").value, 10);
  const greetingMessage = document.getElementById("greetingMessage");

  if (isNaN(userTime) || userTime < 0 || userTime > 2359) {
    greetingMessage.innerHTML = "Please enter a valid time in HHMM format.";
    return;
  }

  if (userTime >= 0 && userTime < 1200) {
    greetingMessage.innerHTML = "Good Morning!";
  } else if (userTime >= 1200 && userTime < 1700) {
    greetingMessage.innerHTML = "Good Afternoon!";
  } else if (userTime >= 1700 && userTime < 2100) {
    greetingMessage.innerHTML = "Good Evening!";
  } else if (userTime >= 2100 && userTime <= 2359) {
    greetingMessage.innerHTML = "Good Night!";
  }
}
