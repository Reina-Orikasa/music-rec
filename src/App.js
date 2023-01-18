import React from "react";
import Header from "./Header";
import Home from "./Home";
import List from "./List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export { App };
