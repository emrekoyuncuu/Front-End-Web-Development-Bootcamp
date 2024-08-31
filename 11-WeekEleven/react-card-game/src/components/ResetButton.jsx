import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

const ResetButton = ({ dispatch }) => (
  <button className="reset-button" onClick={() => dispatch(resetGame())}>
    Play Again
  </button>
);

export default connect()(ResetButton);