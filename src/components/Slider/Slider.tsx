import React, {useState, useEffect} from "react"
import slide4 from "../../components/Slider/img-slider/slide4.jpg"
import slide5 from "../../components/Slider/img-slider/slide5.jpg"
import slide6 from "../../components/Slider/img-slider/slide6.jpg"
import slide7 from "../../components/Slider/img-slider/slide7.jpg"
import slide8 from "../../components/Slider/img-slider/slide8.jpg"
import slide9 from "../../components/Slider/img-slider/slide9.jpg"
import slide10 from "../../components/Slider/img-slider/slide10.jpg"
import "../../components/Slider/slider.css"

const img = [
   <img key={slide4} src={slide4} />,
   <img key={slide5} src={slide5} />,
   <img key={slide6} src={slide6} />,
   <img key={slide7} src={slide7} />,
   <img key={slide8} src={slide8} />,
   <img key={slide9} src={slide9} />,
   <img key={slide10} src={slide10} />,
]

export const Slider: any = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((current) => {
            const res = current === img.length - 1 ? 0 : current + 1
            return res
         })
      }, 5000)
      // @ts-ignore
      return () => clearInterval()
   }, [])

   const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
   const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

   return (
      <div className="slider">
         <div className="slider-img slider-img-prev"
              key={prevImgIndex}>
            {img[prevImgIndex]}
         </div>
         <div className="slider-img"
              key={activeIndex}>
            {img[activeIndex]}
         </div>
         <div className="slider-img slider-img-next"
              key={nextImgIndex}>
            {img[nextImgIndex]}
         </div>
      </div>
   )
}