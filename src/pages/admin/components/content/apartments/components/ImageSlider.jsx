import React from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <Box sx={{ borderRadius: '4px', p: 1.5 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{
                borderRadius: '20px',
                objectFit: 'cover',
                height: 300,
                width: '100%',
              }}
              src={image.imagePath}
              alt={`apartment-${index}`}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
