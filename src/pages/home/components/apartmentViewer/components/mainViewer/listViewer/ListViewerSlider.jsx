import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import OwnerCard from '../../subViewer/apartmentBox/OwnerCard'
import settings from '../../subViewer/style/SliderSettings'
import getApartmentImagesById from '../../../../../../../API/apartments/getApartmentImagesById'

function ListViewerSlider({apartment}) {
    const [images,setImages]=useState([])
    useEffect(()=>{
        getApartmentImagesById(apartment.id,{setImages})
      },[apartment])
  return (
    <Box sx={{position:'relative'}}>
               <Slider {...settings} >
                    {images.map((image, index) => (
                      <div key={index}>
                        <img src={image.imagePath} alt={`Slide ${index}`} style={{ width: "100%",height:'200px',objectFit:'cover' }} />
                      </div>
                    ))}
                   </Slider>
                   <OwnerCard apartment={apartment}/>
        </Box>
  )
}

export default ListViewerSlider
