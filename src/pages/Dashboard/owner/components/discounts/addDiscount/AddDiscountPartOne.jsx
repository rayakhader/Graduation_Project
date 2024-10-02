import React, { useEffect, useState } from 'react'
import getApartmentImagesById from '../../../../../../API/apartments/getApartmentImagesById'
import { Avatar, Box, Radio, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function AddDiscountPartOne({apartment, selectedApartmentId, onSelectApartment }) {
    const[images,setImages]=useState([])
    useEffect(()=>{
        getApartmentImagesById(apartment.id,{setImages})
    },[apartment])
  return (
  <Box sx={{display:'flex',alignItems:'center',py:1.5}}>
    <Radio  checked={selectedApartmentId === apartment.id}
                onChange={() => onSelectApartment(apartment.id)}
                value={apartment.id} />
    <Box sx={{display:'flex',alignItems:'center',width:'100%',p:1.5,border:'1px solid rgba(211,211,211,1)',borderRadius:'4px',justifyContent:'space-between'}}>
    <Box sx={{display:'flex', alignItems:'center'}}>
    <Avatar src={images[0]?images[0].imagePath:'none'} sx={{height:60,width:60}}/>
    <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
    <Typography fontWeight='bold' textTransform='capitalize'>{apartment.name}</Typography>
    <Typography variant='body2' color='textSecondary'  sx={{py:0.5}}><LocationOnIcon />{apartment.cityName}</Typography>
    <Typography variant='body2' color='textSecondary'><AccountBalanceIcon />{apartment.universityName}</Typography>
    </Box>
    </Box>
    <Typography fontWeight='bold' sx={{border:'1px solid rgba(211,211,211,1)',borderRadius:'4px',p:0.5}}>{apartment.price} {apartment.priceCurrency?.name}</Typography>
  </Box>
  </Box>
  )
}

export default AddDiscountPartOne
