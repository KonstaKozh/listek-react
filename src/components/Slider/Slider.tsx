import React, {useState, useEffect} from "react"
import slide4 from "../Slider/img-slider/slide4.avif"
import slide5 from "../Slider/img-slider/slide5.avif"
import slide6 from "../Slider/img-slider/slide6.avif"
import slide7 from "../Slider/img-slider/slide7.avif"
import slide8 from "../Slider/img-slider/slide8.avif"
import slide9 from "../Slider/img-slider/slide9.avif"
import slide10 from "../Slider/img-slider/slide10.avif"
import "./slider.css"

const img = [
   <img key={slide4} src={slide4} alt={'slide'}/>,
   <img key={slide5} src={slide5} alt={'slide'}/>,
   <img key={slide6} src={slide6} alt={'slide'}/>,
   <img key={slide7} src={slide7} alt={'slide'}/>,
   <img key={slide8} src={slide8} alt={'slide'}/>,
   <img key={slide9} src={slide9} alt={'slide'}/>,
   <img key={slide10} src={slide10} alt={'slide'}/>,
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