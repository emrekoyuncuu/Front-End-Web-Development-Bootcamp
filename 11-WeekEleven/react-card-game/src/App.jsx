import React from 'react';
import { connect } from 'react-redux';
import Board from './components/Board';
import Score from './components/Score';
import Notification from './components/Notification';
import "./index.css"

const App = () => (
  <div className="game-container">
    <h1>Memory Game</h1>
    <Score />
    <Board />
    {/* <Notification />  Ben bunu yaptım ama paso alttan çıkması sinirimi bozdu kapadım*/}
  </div>
);

export default connect()(App);