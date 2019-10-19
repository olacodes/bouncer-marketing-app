import React from 'react';

import './App.css';
import HeaderComponent from "./components/HeaderComponent"
import Bouncer from "./components/Bouncer"
import Hero from "./components/Hero"
import Gopro from './components/Gopro';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Bouncer />
      <Hero />
      <Gopro />
    </div>
  );
}

export default App;
