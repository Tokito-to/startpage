if (localStorage.getItem('data') == null) var mode = "dark";
else mode = localStorage.getItem('data');

function updateTime() {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById("time").textContent = time;
}

function determineGreet(hours) {
    let username = "Tokito";
    document.getElementById("greeter").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}`;
}

window.addEventListener('load', () => {
    const currentHour = new Date().getHours();
    updateTime();
    setInterval(updateTime, 1000);
    determineGreet(currentHour);
});

document.addEventListener("DOMContentLoaded", function() {
    change_colors(mode);
});

document.getElementById("mode").addEventListener("click", function () {
    if (mode == "dark") {
        change_colors("light");
        localStorage.setItem('data', 'light');
        data = localStorage.getItem('data');
        mode = data;
    }
    else {
        change_colors("dark");
        localStorage.setItem('data', 'dark');
        data = localStorage.getItem('data');
        mode = data;
    }
});

function dark_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#0C131F";
    document.getElementById("greeter").style.color = "#dee3de";
    mode_id.src = "ico/light.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    for (i = 0; i < link.length; i++)
        link[i].style.color = "#bbb";

}

function light_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#FFE8D4";
    document.getElementById("greeter").style.color = "#767283";
    mode_id.src = "ico/dark.png";
    mode_id.style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    for (i = 0; i < link.length; i++)
        link[i].style.color = "#767283";
}

function change_colors(mode) {
    if (mode == "dark") light_colors();
    else dark_colors();
}
