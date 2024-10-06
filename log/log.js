function logMessage(message) {
    const logOutput = document.getElementById("log-output");
    const logEntry = document.createElement("div");
    logEntry.textContent = message;
    logOutput.appendChild(logEntry);
}
