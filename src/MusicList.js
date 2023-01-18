import React, { useContext } from "react";
import { RecContext } from "./recContext";

export default function MusicList() {
  const hotSongs = [
    {
      title: "Sick Beat",
      rank: 1,
      id: 1,
      image:
        "https://images.unsplash.com/photo-1536782365487-94eaef48851d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Fire Jams",
      rank: 2,
      id: 2,
      image:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
    },
    {
      title: "Freezing Cold",
      rank: 3,
      id: 3,
      image:
        "https://images.unsplash.com/photo-1607443362082-a9e9beb855f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Fellow Kids",
      rank: 4,
      id: 4,
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  const { musicList, updateMusicList } = useContext(RecContext);

  const recSongs = hotSongs.map((song) => {
    return (
      <div
        key={song.id}
        className="border-2 border-black dark:border-white rounded-xl pb-4"
      >
        <img src={song.image} className="rounded-xl"></img>
        <h3 className="text-2xl mt-2">{song.title}</h3>
        <h4 className="text-lg font-light mb-2">Rank: {song.rank}</h4>
        {musicList.some((item) => item.title === song.title) ? (
          "Already Added!"
        ) : (
          <button
            onClick={updateMusicList}
            className="border-2 border-black dark:border-white p-2 rounded-xl hover:bg-gray-400 hover:text-white"
            id={song.title}
            value={JSON.stringify(song)}
          >
            Add to your list
          </button>
        )}
      </div>
    );
  });

  return (
    <div className="mt-4 px-4">
      <h2 className="text-4xl font-semibold mb-4">
        What's hot{" "}
        <span className="dark:text-pink-400 text-pink-500">this week</span>
      </h2>
      <div className="grid grid-cols-2 gap-2">{recSongs}</div>
    </div>
  );
}
