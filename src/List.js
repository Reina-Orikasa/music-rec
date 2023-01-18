import React, { useContext } from "react";
import Footer from "./Footer";
import { RecContext } from "./recContext";

export default function List() {
  const { musicList, removeFromList } = useContext(RecContext);
  const musicListFormatted = musicList.map((song) => {
    return (
      <div
        key={song.id}
        className="border-2 border-black dark:border-white mb-2 pb-4 rounded-xl"
      >
        <img src={song.image} className="rounded-xl" />
        <h3 className="text-2xl">{song.title}</h3>
        <h3 className="text-2xl">Rank: {song.rank}</h3>

        <button
          onClick={removeFromList}
          id={song.id}
          className="border-2 border-black dark:border-white p-2 rounded-xl mt-2"
        >
          Remove
        </button>
      </div>
    );
  });
  return (
    <div>
      <div className="h-96 bg-music-shelf mb-8"></div>
      <div className="text-center mt-4 px-12">
        <h1 className="text-6xl">Your MusicRec List</h1>
        <div className="mb-8 mt-2 flex justify-center align-middle">
          <div className="border-b-4 border-black dark:border-white h-4 w-48"></div>
        </div>
        <div className="grid grid-cols-2 gap-2">{musicListFormatted}</div>
      </div>
      <hr className="my-4" />
      <Footer />
    </div>
  );
}
