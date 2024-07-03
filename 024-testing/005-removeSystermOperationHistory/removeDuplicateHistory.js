const fs = require("fs");
const historyFile = "C:\\Users\\lisalu\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt";
function removeDuplicateHistory() {
    const file = fs.readFileSync(historyFile, "utf8");
    const lines = file.split("\n").map(line => line.trim()).filter(line => line);
    const uniqueLines = Array.from(new Set(lines));
    fs.writeFileSync("data/ConsoleHost_history.txt", uniqueLines.join("\n"));
}
function outputFrequency() {
    const file = fs.readFileSync(historyFile, "utf8");
    const lines = file.split("\n").map(line => line.trim()).filter(line => line);
    const frequency = {};
    lines.forEach(line => {
        frequency[line] = (frequency[line] || 0) + 1;
    });
    const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    fs.writeFileSync("data/frequency.txt", sortedFrequency.map(([line, count]) => `${line} ${count}`).join("\n"));
}
function main() {
    outputFrequency();
    console.log("end of main()");
}
main();