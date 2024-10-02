import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NotAvailable from './NotAvailable';
import Slider from 'react-slick';
import OwnerCard from './OwnerCard';
import settings from '../style/SliderSettings';
import getApartmentBoxStyle from '../style/ApartmentBoxStyle';
import notAvailableStyle from '../style/notAvailableStyle';
import getApartmentImagesById from '../../../../../../../API/apartments/getApartmentImagesById';
import ApartmentBoxContent from './apartmentBoxContent/ApartmentBoxContent';
import DiscountIcon from './DiscountIcon';
import { useNavigate } from 'react-router-dom';
function ApartmentBox({apartment}) {
  const apartmentBoxStyle = getApartmentBoxStyle(apartment)
  const [images,setImages]=useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    getApartmentImagesById(apartment.id,{setImages})
  },[apartment])
  const handleApartment=(id)=>{
    const path =`/home/apartment/${id}`
    navigate(path)
  }
  return (
    <Box onClick={()=>handleApartment(apartment.id)} sx={apartmentBoxStyle}>
   {!apartment.isAvailable && <Box sx={notAvailableStyle}></Box>}
   {apartment.isDiscounted && (
  <Box sx={{position: 'absolute', top: -15, right:-15, zIndex: 1 }}>
    <DiscountIcon  />
  </Box>
)}
           <Box sx={{position:'relative'}}>
     {!apartment.isAvailable && <NotAvailable />}
           <Slider {...settings}>
                     {images.map((image, index) => (
                       <div key={index}>
                         <img src={image.imagePath} alt={`Slide ${index}`} style={{ width: "100%",maxHeight:'150px',objectFit:'cover',borderRadius:'4px' }} />
                       </div>
                     ))}
                    </Slider>
                   <OwnerCard apartment={apartment}/>
               </Box>
               <ApartmentBoxContent apartment={apartment}/>
        </Box>
  )
}

export default ApartmentBox
