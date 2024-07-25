document.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.getElementById("startGame");
  const gameCanvas = document.getElementById("gameCanvas");
  const ctx = gameCanvas.getContext("2d");

  startGameButton.addEventListener("click", () => {
    // Initialize game
    initGame();
  });

  function initGame() {
    // Example game loop
    let lastTime = 0;
    function gameLoop(time) {
      const deltaTime = time - lastTime;
      lastTime = time;

      update(deltaTime);
      render();

      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
  }

  function update(deltaTime) {
    // Update game state
  }

  function render() {
    // Render game state
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    // Example: Draw a square
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(50, 50, 100, 100);
  }

  // Form submission
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message sent!");
    contactForm.reset();
  });
});
