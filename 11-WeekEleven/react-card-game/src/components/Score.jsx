import React from 'react';
import { connect } from 'react-redux';

const Score = ({ score }) => (
  <div className="score">Score: {score}</div>
);

const mapStateToProps = state => ({
  score: state.game.score
});

export default connect(mapStateToProps)(Score);