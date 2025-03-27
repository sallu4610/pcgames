let score = 0;

function bat() {
    let run = Math.floor(Math.random() * 7); // Random runs (0-6)
    score += run;
    document.getElementById("score").innerText = "Score: " + score;
}

// Canvas setup (for future enhancements)
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 300;
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);
