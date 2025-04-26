export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index
      [array[i], array[j]] = [array[j], array[i]];   // swap
    }
    return array;
  }
  