import React, { useState, useEffect } from 'react';
import Emoji from './components/Emoji';
import './App.css';


function App() {

  const [emojis, setEmojis] = useState(['']);
  const [spawnTime, setSpawnTime] = useState(1000);
  const [targetEmoji, setTargetEmoji] = useState('😀');
  const [score, setScore] = useState(0);

  // One minute timer till game over
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setGameOver(true);
    }
  }, [timer]);


  let timeOutRef = null;


  function handleWhack(e, cb) {
    const emo = e.target.innerText;
    cb(emo === targetEmoji);
  }

  useEffect(() => {
    timeOutRef = setTimeout(function emojiSpawn() {
      setEmojis((emojis) => {
        const zindex = 9999999 - emojis.length;
        return [...emojis, <Emoji key={Date.now().toString()} handleWhack={handleWhack} z={zindex} setScore={setScore} />]
      });
      setTimeout(emojiSpawn, spawnTime)
      setSpawnTime(spawnTime - 100);
    }, spawnTime);
    return () => {
      clearTimeout(timeOutRef);
    }
  }, []);



  return (
    <div className="App">
      <header>
        <h1>Emoji Whack</h1>
        {!gameOver ? <span className="score">Score: {score}</span> : null}
      </header>
      <main>
        <div>
          <span className="timer">: {timer}</span>
        </div>
        {!gameOver ? emojis :

          <div className='gameover'>
            <h1>Game Over</h1>
            <h2 className='score'>Final Score: {score}</h2>
            <button
              className='play-again'
              onClick={() => {
                window.location.reload();
              }}
            >Play Again?</button>
          </div>
        }
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
