import React,{useState, useEffect} from 'react';
import Emoji from './components/Emoji';
import './App.css';


function App() {

  const [emojis, setEmojis] = useState(['']);

  useEffect(()=>{
    setTimeout(()=>{
      setEmojis([...emojis, <Emoji />]);
    },1000);
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
