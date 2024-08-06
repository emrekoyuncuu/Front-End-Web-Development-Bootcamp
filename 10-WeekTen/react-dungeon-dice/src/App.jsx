import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { FaDice, FaDungeon, FaSkull, FaGem, FaDragon, FaArrowRight, FaChessRook } from 'react-icons/fa';
import { GiTreasureMap, GiLockedChest, GiOpenChest, GiSwordWound, GiStoneBlock } from 'react-icons/gi';

// Array of dice image paths
const DICE_IMAGES = [
  '/images/dice1.png',
  '/images/dice2.png',
  '/images/dice3.png',
  '/images/dice4.png',
  '/images/dice5.png',
  '/images/dice6.png'
];

// Array of possible dungeon events
const DUNGEON_EVENTS = [
  { type: 'monster', icon: <FaSkull />, message: 'You encounter a monster!' },
  { type: 'lockedChest', icon: <GiLockedChest />, message: 'You found a locked chest!' },
  { type: 'trap', icon: <GiSwordWound />, message: 'You triggered a trap!' },
  { type: 'rest', icon: <FaDungeon />, message: 'You find a safe room to rest.' },
];

function App() {
  // State variables
  const [playerName, setPlayerName] = useState('Adventurer');
  const [playerDice, setPlayerDice] = useState(null);
  const [computerDice, setComputerDice] = useState(null);
  const [result, setResult] = useState('');
  const [isRolling, setIsRolling] = useState(false);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameMode, setGameMode] = useState('dungeon');
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [dungeonProgress, setDungeonProgress] = useState(0);
  const [dungeonLevel, setDungeonLevel] = useState(1);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [playerGold, setPlayerGold] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [chestLocked, setChestLocked] = useState(false);

  // Set initial random dice values on component mount
  useEffect(() => {
    setPlayerDice(Math.floor(Math.random() * 6));
    setComputerDice(Math.floor(Math.random() * 6));
  }, []);

  // Function to handle dice rolling
  const rollDice = () => {
    setIsRolling(true);
    setResult('');
    setCurrentEvent(null);

    // Play dice roll sound
    const audio = new Audio('/sounds/dice-roll.mp3');
    audio.play();

    // Simulate dice rolling animation
    const rollInterval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6));
      setComputerDice(Math.floor(Math.random() * 6));
    }, 50);

    // Determine final dice values and game result
    setTimeout(() => {
      clearInterval(rollInterval);
      const playerRoll = Math.floor(Math.random() * 6);
      const computerRoll = Math.floor(Math.random() * 6);

      setPlayerDice(playerRoll);
      setComputerDice(computerRoll);

      let roundResult;
      if (gameMode === 'dungeon') {
        // Dungeon crawler mode logic
        const progress = playerRoll - computerRoll;
        const newProgress = Math.max(0, Math.min(100, dungeonProgress + progress * 10));
        setDungeonProgress(newProgress);
        
        if (progress > 0) {
          roundResult = `You advance ${progress} steps!`;
          // Trigger random dungeon event
          const event = DUNGEON_EVENTS[Math.floor(Math.random() * DUNGEON_EVENTS.length)];
          setCurrentEvent(event);
          
          // Apply event effects
          switch (event.type) {
            case 'monster':
              setPlayerHealth(prev => Math.max(0, prev - 10));
              break;
            case 'lockedChest':
              if (chestLocked) {
                setPlayerGold(prev => prev + 20);
                setChestLocked(false);
                setCurrentEvent({...event, type: 'openChest', icon: <GiOpenChest />, message: 'You opened the chest and found gold!'});
              } else {
                setChestLocked(true);
              }
              break;
            case 'trap':
              setPlayerHealth(prev => Math.max(0, prev - 5));
              break;
            case 'rest':
              setPlayerHealth(prev => Math.min(100, prev + 15));
              break;
          }
        } else if (progress < 0) {
          roundResult = `You retreat ${Math.abs(progress)} steps!`;
        } else {
          roundResult = "You hold your ground!";
        }

        // Check if player completed the current dungeon level
        if (newProgress >= 100) {
          setDungeonLevel(prev => prev + 1);
          setDungeonProgress(0);
          roundResult = `You've conquered level ${dungeonLevel}! Entering level ${dungeonLevel + 1}...`;
        }

        // Check if player's health reached zero
        if (playerHealth <= 0) {
          roundResult = "Game Over! You've been defeated in the dungeon.";
          resetGame();
        }
      } else {
        // Classic mode logic
        if (playerRoll > computerRoll) {
          roundResult = `${playerName} wins!`;
          setPlayerWins(prev => prev + 1);
        } else if (playerRoll < computerRoll) {
          roundResult = 'Computer wins!';
          setComputerWins(prev => prev + 1);
        } else {
          roundResult = "It's a draw!";
          setDraws(prev => prev + 1);
        }
      }

      setResult(roundResult);
      setIsRolling(false);
      setRoundsPlayed(prev => prev + 1);
    }, 2000);
  };

  // Function to reset the game
  const resetGame = () => {
    setPlayerWins(0);
    setComputerWins(0);
    setDraws(0);
    setRoundsPlayed(0);
    setResult('');
    setDungeonProgress(0);
    setDungeonLevel(1);
    setPlayerHealth(100);
    setPlayerGold(0);
    setCurrentEvent(null);
    setChestLocked(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-merriweather p-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          <FaDungeon className="inline-block mr-2" /> Dungeon Dice
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Adventurer</h2>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-gray-700 p-2 rounded"
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Game Mode</h2>
            <select 
              value={gameMode} 
              onChange={(e) => setGameMode(e.target.value)}
              className="w-full bg-gray-700 p-2 rounded"
            >
              <option value="dungeon">Dungeon Crawler</option>
              <option value="classic">Classic Mode</option>
            </select>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Stats</h2>
            <p><FaDragon className="inline-block mr-2" /> Health: {playerHealth}</p>
            <p><FaGem className="inline-block mr-2" /> Gold: {playerGold}</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
        >
          <div className="flex justify-around items-center mb-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{playerName}</h3>
              <motion.img 
                key={playerDice}
                src={playerDice !== null ? DICE_IMAGES[playerDice] : DICE_IMAGES[0]} 
                alt="Player Dice"
                className="w-20 h-20 mx-auto"
                initial={{ rotate: 0 }}
                animate={{ rotate: isRolling ? 360 : 0 }}
                transition={{ duration: 0.5, repeat: isRolling ? Infinity : 0 }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Dungeon</h3>
              <motion.img 
                key={computerDice}
                src={computerDice !== null ? DICE_IMAGES[computerDice] : DICE_IMAGES[0]} 
                alt="Dungeon Dice"
                className="w-20 h-20 mx-auto"
                initial={{ rotate: 0 }}
                animate={{ rotate: isRolling ? 360 : 0 }}
                transition={{ duration: 0.5, repeat: isRolling ? Infinity : 0 }}
              />
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={rollDice} 
            disabled={isRolling}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {isRolling ? 'Rolling...' : 'Roll Dice'}
          </motion.button>
          
          {result && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-xl mt-4"
            >
              {result}
            </motion.p>
          )}
        </motion.div>

        {gameMode === 'dungeon' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Dungeon Progress</h2>
            <div className="flex items-center mb-2">
              <FaChessRook className="mr-2" />
              <span>Level {dungeonLevel}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${dungeonProgress}%` }}></div>
            </div>
            {currentEvent && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-700 p-4 rounded-lg"
              >
                <p className="flex items-center">
                  {currentEvent.icon}
                  <span className="ml-2">{currentEvent.message}</span>
                </p>
                {currentEvent.type === 'lockedChest' && chestLocked && (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={rollDice}
                    className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-2 rounded text-sm"
                  >
                    Try to open
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Game Statistics</h2>
          {gameMode === 'classic' ? (
            <p>{playerName} Wins: {playerWins} | Computer Wins: {computerWins} | Draws: {draws}</p>
          ) : (
            <p><GiTreasureMap className="inline-block mr-2" /> Dungeon Progress: Level {dungeonLevel} - {dungeonProgress}%</p>
          )}
          <p className="mt-2">Rounds Played: {roundsPlayed}</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset Game
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;