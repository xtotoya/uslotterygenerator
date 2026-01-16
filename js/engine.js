function generateUniqueNumbers(count, max) {
    const set = new Set();
    while (set.size < count) {
      set.add(Math.floor(Math.random() * max) + 1);
    }
    return [...set].sort((a, b) => a - b);
  }
  
  function generateGameNumbers(gameKey) {
    const game = GAMES[gameKey];
    return {
      main: generateUniqueNumbers(game.main.count, game.main.max),
      bonus: generateUniqueNumbers(game.bonus.count, game.bonus.max)
    };
  }
  