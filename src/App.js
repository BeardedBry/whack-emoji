import React,{useState, useEffect} from 'react';
import Emoji from './components/Emoji';
import './App.css';



function App() {

  const [emojis, setEmojis] = useState(['']);
  const [spawnTime, setSpawnTime] = useState(1000);

  function handleWhack(e){
    console.log('whack');
    console.log(e.target);
  }


  useEffect(()=>{
    setTimeout(function emojiSpawn(){
      setEmojis((emojis) => [...emojis, <Emoji key={Date.now().toString()} handleWhack={handleWhack} 
        // rando={randomNumber} 
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
