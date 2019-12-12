import React from "react";
import "./App.css";
import NasaGrid from './components/NasaGrid/NasaGrid'
import NavBar from './components/navbar/NavBar'
import Carousel from './components/Carousel/Carousel'



function App() {
  return (
    <div className="App">
      <NavBar />

      <h1 class="display-1">Mars Images</h1>

      <NasaGrid />

    </div>

  );
}

export default App;
