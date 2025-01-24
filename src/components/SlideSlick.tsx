import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider, { type Settings } from "react-slick";
import { useStore } from '@nanostores/react';
import { isSelectedImage } from "../slideStore";

const images = [
  {
    id: 1,
    url: "/img/galeria/DSC00006.jpg"
  },
  {
    id: 2,
    url: "/img/galeria/DSC09883.jpg"
  },
  {
    id: 3,
    url: "/img/galeria/DSC09902.jpg"
  },
  {
    id: 4,
    url: "/img/galeria/DSC09919.jpg"
  },
  {
    id: 5,
    url: "/img/galeria/DSC09929.jpg"
  },
  {
    id: 6,
    url: "/img/galeria/DSC09991.jpg"
  },

]

function CenterMode () {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const $isCartOpen = useStore(isSelectedImage);

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 2000,
    initialSlide: 0,
    arrows: true,
    afterChange: (current: number) => {
      console.log("🚀 ~ CenterMode ~ current:", current);
      isSelectedImage.set(current)
      // Actualiza el índice de la imagen activa (en el centro)
      // setCurrentImageIndex(current);
    },
    // dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative slider-container w-full">
      <Slider {...settings} >
        {
          images.map(({id, url}) => {
            return (
              <div id={id.toString()}>
                <img className="w-11/12 drop-shadow-md rounded-lg" src={url} alt="" />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default CenterMode;