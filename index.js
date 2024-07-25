document.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.getElementById("startGame");
  const gameCanvas = document.getElementById("gameCanvas");
  const ctx = gameCanvas.getContext("2d");
  let gameRunning = false;

  startGameButton.addEventListener("click", () => {
    if (!gameRunning) {
      gameRunning = true;
      initGame();
    }
  });

  const player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: "#FF0000",
    speed: 5
  };

  const point = {
    x: Math.random() * (gameCanvas.width - 20),
    y: Math.random() * (gameCanvas.height - 20),
    width: 20,
    height: 20,
    color: "#00FF00"
  };

  let score = 0;

  function initGame() {
    document.addEventListener("keydown", movePlayer);
    gameLoop();
  }

  function movePlayer(event) {
    switch(event.key) {
      case "ArrowUp":
        player.y -= player.speed;
        break;
      case "ArrowDown":
        player.y += player.speed;
        break;
      case "ArrowLeft":
        player.x -= player.speed;
        break;
      case "ArrowRight":
        player.x += player.speed;
        break;
    }
    checkCollision();
  }

  function checkCollision() {
    if (
      player.x < point.x + point.width &&
      player.x + player.width > point.x &&
      player.y < point.y + point.height &&
      player.y + player.height > point.y
    ) {
      score++;
      point.x = Math.random() * (gameCanvas.width - 20);
      point.y = Math.random() * (gameCanvas.height - 20);
      console.log("Score: " + score);
    }
  }

  function gameLoop() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    renderPlayer();
    renderPoint();
    requestAnimationFrame(gameLoop);
  }

  function renderPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  function renderPoint() {
    ctx.fillStyle = point.color;
    ctx.fillRect(point.x, point.y, point.width, point.height);
  }

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message sent!");
    contactForm.reset();
  });
});
