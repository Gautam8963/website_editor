document.addEventListener("DOMContentLoaded", () => {
    const commandInput = document.getElementById("commandInput");
    const applyButton = document.getElementById("applyButton");
    const resetButton = document.getElementById("resetButton");
    const statusMessage = document.getElementById("statusMessage");
    const statusText = document.getElementById("statusText");
    const loader = document.querySelector(".loader");
    const commandButtons = document.querySelectorAll(".command-btn");

    commandButtons.forEach(btn => {
        btn.addEventListener("click",() => {
            commandInput.value = btn.dataset.command;
            commandInput.focus();
        });
    });

    resetButton.addEventListener("click", () => {
        executeCommand("reset page");
    });

    applyButton.addEventListener("click", () => {
        const commandText = commandInput.value.trim();
        if (!commandText) {
            showStatus("Please enter a command.", "error");
            return;
        }
        executeCommand(commandText);
    });

    function executeCommand(commandText) {
        showLoading();
        const instruction = parseCommand(commandText);

        if (!instruction) {
            showStatus('Command not recognized. Try "change background to blue" or "increase font size"', "error");
            return;
        }


}