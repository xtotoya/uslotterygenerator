const select = document.getElementById("gameSelect");
const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const gameKey = select.value;
  const game = GAMES[gameKey];
  const numbers = generateGameNumbers(gameKey);

  result.innerHTML = "";

  numbers.main.forEach(n => {
    result.appendChild(createBall(n, game.main.color));
  });

  numbers.bonus.forEach(n => {
    result.appendChild(createBall(n, game.bonus.color, true));
  });
});

function createBall(num, color, isBonus = false) {
  const div = document.createElement("div");
  div.className = "ball" + (isBonus ? " bonus" : "");
  div.textContent = num;
  div.style.backgroundColor = color;
  return div;
}
