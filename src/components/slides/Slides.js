import { React, useState } from 'react'
import './slide.css'
import slide1 from '../slides/images/1.jpg'
import slide2 from '../slides/images/2.jpg'
import slide3 from '../slides/images/3.jpg'
import slide4 from '../slides/images/4.jpg'

const Slides = () => {

   const slides = [
      {
         url: slide1
      },
      {
         url: slide2
      },
      {
         url: slide3
      },
      {
         url: slide4
      }
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   }

   const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   }

   const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex)
   }

   return (
      <>
         <div className="main" >
            {/* slides sections */}
            <div className="slides" style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>

            </div>

            {/* arrow section */}
            <div className="arrows">
               <div className='arrow-left' onClick={prevSlide}>
                  <i class="fa-solid fa-arrow-left"></i>
               </div>
               <div className='arrow-right' onClick={nextSlide}>
                  <i class="fa-solid fa-arrow-right"></i>
               </div>
            </div>


         </div>
         {/* dots section */}
         <div className="dot-section">
            {slides.map((slide, slideIndex) => (
               <div
                  className='dots'
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
               >
                  {/* dots are here */}
               </div>
            ))}
         </div>
      </>
   )
}

export default Slides