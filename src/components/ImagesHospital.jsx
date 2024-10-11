import React, { useState, useEffect } from 'react';
import '../index.css'


const ImagesHospital = () => {
  
  const images = [
    'hop1.png', 
    'hop2.png',
    'hop3.png',
    'hop4.png'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <img src={images[currentIndex]} alt="slideshow"  className='imagesSlider'/>
    </>
  );
};


export default ImagesHospital
