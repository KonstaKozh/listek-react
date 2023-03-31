import React from 'react';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
// import {Slider} from "./components/Slider/Slider";
import {Services} from "./components/Services/Services";
import Slider1 from "./components/Slider/Slider1";

function App() {
   return (
      <div>
         <Header />
         <NavBar />
         <Slider1 />
         <Services />
      </div>
   )
}

export default App

