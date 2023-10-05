// main.js

// getting EDT Time && updating it every second
setInterval(getTime, 1000);
function getTime() {
    const time = new Date();
    document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}
