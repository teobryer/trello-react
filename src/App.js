import Header from "components/Header/header";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "Router";
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleChange = () => {
    setLoggedIn(!isLoggedIn);

    // Ici, vous pouvez ajouter d'autres actions, comme mettre à jour un état global ou envoyer une requête à un serveur
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header connectChange={handleChange} isChecked={isLoggedIn} />
        <Router isLoggedIn={isLoggedIn} />
      </div>
    </BrowserRouter>
  );
}

export default App;
