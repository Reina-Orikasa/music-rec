import React, { useState } from "react";
const RecContext = React.createContext();

function RecContextProvider(props) {
  const [musicList, setMusicList] = useState([]);

  function updateMusicList(song) {
    let songinfo = JSON.parse(song.target.value);
    setMusicList((oldList) => [...oldList, songinfo]);
  }

  function removeFromList(song) {
    setMusicList(
      musicList.filter((songName) => Number(song.target.id) !== songName.id)
    );
  }

  return (
    <RecContext.Provider value={{ musicList, updateMusicList, removeFromList }}>
      {props.children}
    </RecContext.Provider>
  );
}

export { RecContextProvider, RecContext };
