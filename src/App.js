import React,{useState, useEffect} from 'react';
import Emoji from './components/Emoji';
import './App.css';



function App() {

  const [emojis, setEmojis] = useState(['']);
  const [spawnTime, setSpawnTime] = useState(1000);
  const [targetEmoji, setTargetEmoji] = useState('😀');

  function handleWhack(e, cb){
    const emo = e.target.innerText;
    cb(emo === targetEmoji);
  }

  useEffect(()=>{
    setTimeout(function emojiSpawn(){
      setEmojis((emojis) => [...emojis, <Emoji key={Date.now().toString()} handleWhack={handleWhack} 
        />]);
        setTimeout(emojiSpawn,spawnTime)
    },spawnTime);
  },[]);



  return (
    <div className="App">
      <header>
      </header>
      <main>
        {emojis}
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
