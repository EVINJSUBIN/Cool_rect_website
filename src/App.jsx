import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./card";
import About from "./About";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleHomeClick = () => {
    setCurrentPage("home");
  };

  const handleAboutClick = () => {
    setCurrentPage("about");
  };

  return (
    <div className="App">
      <Navbar onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} />
      {currentPage === "home" && <Card />}
      {currentPage === "about" && <About />}
    </div>
  );
}

export default App;
