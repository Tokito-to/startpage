function dark_colors() {
    let mode_id = document.getElementById("mode");
    let icons = document.querySelectorAll('.icon-container i');
    let text = document.querySelectorAll('.icon-container span');
    document.body.style.background = "#0C131F";
    document.getElementById("greeter").style.color = "#dee3de";
    document.getElementById("time").style.color = "#F4B6C2";
    document.getElementById("input").style.color="#F5F5F5";
    document.getElementById("input").style.borderBottom="2px solid #F5F5F5";
    mode_id.src = "ico/light.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    icons.forEach(icon => {
        icon.style.backgroundColor = "#3B3C3D";
        icon.style.color = "#fff";
    });
    text.forEach(text => {
        text.style.color = "#F5F5F5";
    });
}

function light_colors() {
    let mode_id = document.getElementById("mode");
    let icons = document.querySelectorAll('.icon-container i');
    let text = document.querySelectorAll('.icon-container span');
    document.body.style.background = "#FFE8D4";
    document.getElementById("greeter").style.color = "#767283";
    document.getElementById("time").style.color = "#6B5B95";
    document.getElementById("input").style.color="#353839";
    document.getElementById("input").style.borderBottom="2px solid #353839";
    mode_id.src = "ico/dark.png";
    mode_id.style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    icons.forEach(icon => {
        icon.style.backgroundColor = "#B0B3B8";
        icon.style.color = "#fff";
    });
    text.forEach(text => {
        text.style.color = "#353839";
    });
}

function change_colors(newMode) {
    if (newMode === "dark") {
        dark_colors();
    } else {
        light_colors();
    }
}

let mode;
if (localStorage.getItem('data') === null) {
    mode = "dark";
} else {
    mode = localStorage.getItem('data');
}

document.getElementById("mode").addEventListener("click", function () {
    if (mode === "dark") {
        mode = "light";
    } else {
        mode = "dark";
    }
    localStorage.setItem('data', mode);
    change_colors(mode);
});

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

let input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
   if (event.key === 'Enter') {
       if (input.value !== "") {
           const search_query = "https://duckduckgo.com/?q=" + encodeURIComponent(input.value);
           window.location.replace(search_query);
        }
       input.blur();
       event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    change_colors(mode);
});