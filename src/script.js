function dark_colors() {
    const darkTheme = {
        '--rosewater': '#f5e0dc',
        '--flamingo': '#f2cdcd',
        '--pink': '#f5c2e7',
        '--mauve': '#cba6f7',
        '--red': '#f38ba8',
        '--maroon': '#eba0ac',
        '--peach': '#fab387',
        '--yellow': '#f9e2af',
        '--green': '#a6e3a1',
        '--teal': '#94e2d5',
        '--sky': '#89dceb',
        '--sapphire': '#74c7ec',
        '--blue': '#89b4fa',
        '--lavender': '#b4befe',
        '--text': '#cdd6f4',
        '--subtext1': '#bac2de',
        '--subtext0': '#a6adc8',
        '--overlay2': '#9399b2',
        '--overlay1': '#7f849c',
        '--overlay0': '#6c7086',
        '--surface2': '#585b70',
        '--surface1': '#45475a',
        '--surface0': '#313244',
        '--base': '#1e1e2e',
        '--mantle': '#181825',
        '--crust': '#11111b'
    };

    for (const [key, value] of Object.entries(darkTheme)) {
        document.documentElement.style.setProperty(key, value);
    }

    let mode_id = document.getElementById("mode");
    mode_id.src = "ico/dark.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
}

function light_colors() {
    const lightTheme = {
        '--rosewater': '#dc8a78',
        '--flamingo': '#dd7878',
        '--pink': '#ea76cb',
        '--mauve': '#8839ef',
        '--red': '#d20f39',
        '--maroon': '#e64553',
        '--peach': '#fe640b',
        '--yellow': '#df8e1d',
        '--green': '#40a02b',
        '--teal': '#179299',
        '--sky': '#04a5e5',
        '--sapphire': '#209fb5',
        '--blue': '#1e66f5',
        '--lavender': '#7287fd',
        '--text': '#4c4f69',
        '--subtext1': '#5c5f77',
        '--subtext0': '#6c6f85',
        '--overlay2': '#7c7f93',
        '--overlay1': '#8c8fa1',
        '--overlay0': '#9ca0b0',
        '--surface2': '#acb0be',
        '--surface1': '#bcc0cc',
        '--surface0': '#ccd0da',
        '--base': '#eff1f5',
        '--mantle': '#e6e9ef',
        '--crust': '#dce0e8'
    };

    for (const [key, value] of Object.entries(lightTheme)) {
        document.documentElement.style.setProperty(key, value);
    }

    let mode_id = document.getElementById("mode");
    mode_id.src = "ico/light.png";
    mode_id.style.filter = "invert(23%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
}

function change_colors(newMode) {
    if (newMode === "dark") {
        dark_colors();
    } else {
        light_colors();
    }
}

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

let mode;
if (localStorage.getItem('data') === null) {
    mode = "dark";
} else {
    mode = localStorage.getItem('data');
}

document.addEventListener("DOMContentLoaded", function() {
    change_colors(mode);
});

document.getElementById("mode").addEventListener("click", function () {
    if (mode === "dark") {
        mode = "light";
    } else {
        mode = "dark";
    }
    localStorage.setItem('data', mode);
    change_colors(mode);
});

