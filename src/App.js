import React from "react";
import "./App.css";
import Board from "./components/Board/board";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
