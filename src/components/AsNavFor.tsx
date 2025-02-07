import React, { useState } from 'react';
import Slider, { type Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideSlickWithNav = () => {
  const [slider1, setSlider1] = useState(null); // Referencia para el carousel principal
  const [slider2, setSlider2] = useState(null); // Referencia para el carousel de miniaturas

  const images = [
    "/img/galeria/new/DSC09929.jpg",
    "/img/galeria/new/DSC09916.jpg",
    "/img/galeria/new/DSC09871.jpg",
    "/img/galeria/new/DSC00247.jpg",
    "/img/galeria/new/DSC00076_vertical.jpg",
    "/img/galeria/new/DSC00200_vertical.jpg",
    "/img/galeria/new/DSC09984.jpg",
  ];

  const settingsMain = {
    arrows: false, // No flechas en el carousel principal
    fade: true,    // Hacer transición en fade
    asNavFor: slider2, // Conecta este slider con el segundo slider (miniaturas)
  };

  const settingsNav: Settings = {
    focusOnSelect: true, // Selección al hacer clic en la miniatura
    infinite: true,
    centerMode: true,
    slidesToShow: 3, // Mostrar 3 miniaturas a la vez
    asNavFor: slider1, // Conecta este slider con el principal
    autoplay: true, // Hacer transición
    autoplaySpeed: 1200, // Tiempo de transición entre slides
  };

  return (
    <div className='flex flex-col gap-2 p-4'>
      {/* Carousel Principal */}
      <Slider
        ref={(slider) => setSlider1(slider)} // Referencia para el carousel principal
        {...settingsMain}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Image ${index + 1}`} 
              className="w-full 
              h-[75svh]  
              rounded-lg
              md:object-contain
              object-contain object-center drop-shadow-xl 
              lg:h-[75svh] lg:object-contain lg:object-center
              " />
          </div>
        ))}
      </Slider>

      {/* Carousel de Navegación (Miniaturas) */}
      <Slider
        ref={(slider) => setSlider2(slider)} // Referencia para el carousel de miniaturas
        {...settingsNav}
      >
        {images.map((src, index) => (
          <div className='flex flex-row justify-center items-center gap-4 xl:px-12' key={index}>
            {/* <picture className='px-5'> */}
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 md:w-48 lg:w-full lg:h-32 object-cover cursor-pointer drop-shadow-md rounded-lg px-2 
                lg:object-cover lg:object-center 
                xl:w-[50svw] xl:object-cover xl:object-center 
                xl:px-0
                "
              />
            {/* </picture> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideSlickWithNav;
