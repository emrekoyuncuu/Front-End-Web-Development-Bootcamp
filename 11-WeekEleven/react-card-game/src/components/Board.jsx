import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { flipCard, resetFlippedCards } from '../actions';

const Board = ({ cards, flippedIndexes, matchedIndexes, gameOver, dispatch }) => {
  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const timer = setTimeout(() => {
        dispatch(resetFlippedCards());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [flippedIndexes, dispatch]);

  if (gameOver) {
    return <div>Game Over! <button onClick={() => dispatch({ type: 'RESET_GAME' })}>Play Again</button></div>;
  }

  return (
    <div className="board" style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px'}}>
      {cards && cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          card={card}
          flipped={flippedIndexes.includes(index) || matchedIndexes.includes(index)}
          matched={matchedIndexes.includes(index)}
          onClick={() => dispatch(flipCard(index))}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.game.cards,
  flippedIndexes: state.game.flippedIndexes,
  matchedIndexes: state.game.matchedIndexes,
  gameOver: state.game.gameOver
});

export default connect(mapStateToProps)(Board);