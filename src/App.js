import React, { useState } from 'react';
//Import Styles
import "./styles/app.scss"
//Adding Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
//Importing data from util
import chillHop from './util';

const App = () => {
  //State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
       <Song currentSong={currentSong}/>
       <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
       <Library songs={songs} setCurrentSong={setCurrentSong}/>
       console.log("Testing is clear!!")
    </div>
  );
}

export default App;
