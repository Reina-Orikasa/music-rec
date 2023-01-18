import React from "react";
import Footer from "./Footer";
import ForYou from "./ForYou";
import MusicList from "./MusicList";

export default function Home() {
  return (
    <div className="text-center mt-2">
      <div className="flex justify-center align-middle bg-1">
        <img
          src="https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80"
          className="h-1/2 w-1/2 rounded-xl"
        />
      </div>
      <span className="border-2 border-black dark:border-white rounded-xl">
        <h1 className="text-6xl font-bold">Welcome</h1>
        <h3 className="text-3xl font-semibold">This is MusicRec</h3>

        <p>A place for musicrec</p>
        <p>Let's begin</p>
      </span>

      <MusicList />
      <hr className="my-4" />
      <ForYou />
      <Footer />
    </div>
  );
}
