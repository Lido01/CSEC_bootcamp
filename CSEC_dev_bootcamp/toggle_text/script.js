const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");
const themeBtn = document.getElementById("themeBtn");
const toggleSound = document.getElementById("toggleSound");

let isOn = false;

/* Toggle ON / OFF */
function toggleStatus() {
    if (isOn) {
        statusText.textContent = "OFF";
        statusText.classList.remove("on");
        statusText.classList.add("off");
        isOn = false;
    } else {
        statusText.textContent = "ON";
        statusText.classList.remove("off");
        statusText.classList.add("on");
        isOn = true;
    }

    toggleSound.currentTime = 0;
    toggleSound.play();
}

toggleBtn.addEventListener("click", toggleStatus);

/* Dark / Light Mode */
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

/* Keyboard Support */
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        toggleStatus();
    }
});
