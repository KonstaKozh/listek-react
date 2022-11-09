import React from 'react';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
import {Slider} from "./components/Slider/Slider";
import {Services} from "./components/Services/Services";

function App() {
  return (
     <div>
       <Header />
       <NavBar />
       <Slider />
       <Services />
     </div>
  )
}

export default App
