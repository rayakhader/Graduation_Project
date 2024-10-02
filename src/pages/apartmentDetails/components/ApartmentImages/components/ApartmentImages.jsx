import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getApartmentImagesById from '../../../../../API/apartments/getApartmentImagesById';
function ApartmentImages({apartmentDetails,id}) {
  const mainSliderRef = React.useRef();
  const thumbSliderRef = React.useRef();
  const[activeSlide,setActiveSlide]=useState(0)
  const [images,setImages]=useState([])
 
  useEffect(()=>{
    getApartmentImagesById(id,{setImages})
  },[apartmentDetails])
  const goToSlide = (index) => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };
  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor:thumbSliderRef.current ,
    dots:true,
    autoplay: true, 
    autoplaySpeed: 3000, 
    beforeChange:(current,next)=>{setActiveSlide(next)},
  };
  const thumbSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: images.length > 1,
    arrows:true,
    beforeChange:(current,next)=>{setActiveSlide(next)},
  };
  return (
    <>
    <Slider {...mainSliderSettings} ref={mainSliderRef}  >
        {images &&images.map((image, index) => (
          <div key={index}>
            <img src={image.imagePath} alt={`Slide ${index}`} style={{ width: "100%", maxHeight: '500px', objectFit: 'cover',borderRadius:'4px'}}  />
          </div>
        ))}
      </Slider>
      <Slider {...thumbSliderSettings} ref={thumbSliderRef}>
        {images &&images.map((image, index) => (
          <div key={index} onClick={()=>goToSlide(index)}>
            <img src={image.imagePath} alt={`Thumbnail ${index}`} style={{ width: "100%", 
            maxHeight: '100px', objectFit: 'cover'
            ,border: activeSlide===index?'2px solid rgba(0,0,0,0.4)' : '5px solid white',borderRadius:'4px'}}
             />
          </div>
        ))}
      </Slider>
    </>
  )
}
export default ApartmentImages
