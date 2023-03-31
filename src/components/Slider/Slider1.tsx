import React, { useState } from 'react';

import slide4 from "../Slider/img-slider/slide4.avif"
import slide5 from "../Slider/img-slider/slide5.avif"
import slide6 from "../Slider/img-slider/slide6.avif"
import slide7 from "../Slider/img-slider/slide7.avif"
import slide8 from "../Slider/img-slider/slide8.avif"
import slide9 from "../Slider/img-slider/slide9.avif"
import slide10 from "../Slider/img-slider/slide10.avif"

import "./slider1.css"

const images = [slide4, slide5, slide6, slide7, slide8, slide9, slide10];

const Slider1 = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const nextSlide = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
   };

   const previousSlide = () => {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
   };

   const goToSlide = (index: React.SetStateAction<number>) => {
      setCurrentSlide(index);
   };

   return (
      <div className="slider">
         <div className="container">
            {images.map((image: string, index: number) => (
               <div
                  className={`slide ${
                     index === currentSlide ? 'active' : ''
                  }`}
                  key={index}
               >
                  <img src={image} alt={`Slide ${index + 1}`} />
               </div>
            ))}
         </div>
         <div className="caption">
            {images.map((_: any, index: number) => (
               <button
                  className={`dot ${
                     index === currentSlide ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => goToSlide(index)}
               />
            ))}
         </div>
         <button className="prev" onClick={previousSlide}>
            Previous
         </button>
         <button className="next" onClick={nextSlide}>
            Next
         </button>
      </div>
   );
};

export default Slider1;