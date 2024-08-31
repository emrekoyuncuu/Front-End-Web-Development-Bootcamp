export const flipCard = index => ({
    type: 'FLIP_CARD',
    index
  });
  
  export const resetFlippedCards = () => ({
    type: 'RESET_FLIPPED'
  });
  
  export const resetGame = () => ({
    type: 'RESET_GAME'
  });