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

    
})