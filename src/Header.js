import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecContext } from "./recContext";

export default function Header() {
  let { musicList } = useContext(RecContext);
  return (
    <div className="bg-gray-400 dark:bg-slate-700 flex justify-around p-4">
      <div className="flex justify-around gap-x-4">
        <Link to={"/"}>
          <h1 className="text-2xl font-semibold">MusicRec</h1>
        </Link>
      </div>

      <Link to={"/list"}>
        <p className="font-light">Your List: {musicList.length}</p>
      </Link>
    </div>
  );
}
