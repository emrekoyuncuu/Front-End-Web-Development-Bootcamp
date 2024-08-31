import { combineReducers } from 'redux';

const initialCards = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🦆'];
const shuffleArray = arr => [...arr, ...arr].sort(() => Math.random() - 0.5);

const initialState = {
  cards: shuffleArray(initialCards),
  flippedIndexes: [],
  matchedIndexes: [],
  score: 0,
  gameOver: false,
  notification: null
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_CARD':
      if (state.flippedIndexes.length === 2 || state.matchedIndexes.includes(action.index) || state.flippedIndexes.includes(action.index)) return state;
      const newFlippedIndexes = [...state.flippedIndexes, action.index];
      
      if (newFlippedIndexes.length === 2) {
        const [firstIndex, secondIndex] = newFlippedIndexes;
        if (state.cards[firstIndex] === state.cards[secondIndex]) {
          // Match found
          const newMatchedIndexes = [...state.matchedIndexes, firstIndex, secondIndex];
          return {
            ...state,
            flippedIndexes: [],
            matchedIndexes: newMatchedIndexes,
            score: state.score + 50,
            notification: 'Success! +50',
            gameOver: newMatchedIndexes.length === state.cards.length
          };
        } else {
          // No match
          return {
            ...state,
            flippedIndexes: newFlippedIndexes,
            score: Math.max(0, state.score - 10),
            notification: 'Wrong! -10'
          };
        }
      }
      return { ...state, flippedIndexes: newFlippedIndexes };

    case 'RESET_FLIPPED':
      return { ...state, flippedIndexes: [], notification: null };

    case 'RESET_GAME':
      return {
        ...initialState,
        cards: shuffleArray(initialCards)
      };

    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer
});