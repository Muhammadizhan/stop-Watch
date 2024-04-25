let startTime;
let elapsedTime = 0;
let timerInterval;
let rainbowInterval;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateStopwatch, 10);
    isRunning = true;
  }
}

function stopStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("stopwatch").innerText = "00:00:00:000";
  isRunning = false;
}

function updateStopwatch() {
  const elapsedTimeInMillis = Date.now() - startTime;

  const hours = Math.floor(elapsedTimeInMillis / (1000 * 60 * 60));
  const minutes = Math.floor(
    (elapsedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((elapsedTimeInMillis % (1000 * 60)) / 1000);
  const milliseconds = elapsedTimeInMillis % 1000;

  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${
    milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : ""
  }${milliseconds}`;
  document.getElementById("stopwatch").innerText = formattedTime;
}

// Function to stop the rainbow animation
function stopRainbow() {
  clearInterval(rainbowInterval);
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
