import React, { useEffect, useState } from 'react'
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, IconButton,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import getApartmentImagesById from '../../../../../../../../API/apartments/getApartmentImagesById';
import ManageApartment from './ManageSec/ManageApartment';
import EditApartment from './EditSec/EditApartment';

function OwnerApartmentViewer({apartment,setSuccess}) {
    const navigate = useNavigate();
    const [images,setImages]=useState([])
    const handleApartment=(id)=>{
        const path =`${id}`
        navigate(path)
        }   
        useEffect(()=>{
          getApartmentImagesById(apartment.id,{setImages})
  },[apartment])
  return (
    <Box sx={{ display:'flex',flexDirection:'column',p:1,position:'relative',backgroundColor:'white',border:'1px solid rgba(211,211,211,1)',borderRadius:'10px',height:'320px',overflow:'hidden',cursor:'pointer'}}>
            <Box sx={{gap:0.5,display:'flex',alignItems:'center',position:'absolute', top:10,right:10}}>
              <EditApartment id={apartment.id} />
              <ManageApartment id={apartment.id} setSuccess={setSuccess}/>
            </Box>
            {images.length > 0 && (
        <img src={images[0].imagePath} alt="Cover" style={{ width: '100%', height: '180px',objectFit:'cover' }} />
      )}            <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
            <Typography sx={{my:1,display:'flex'}} textTransform='capitalize'  onClick={()=>handleApartment(apartment.id)}>{apartment.name}</Typography>
            <Typography variant='body2' color="textSecondary" textTransform='capitalize'><LocationOnIcon color='disabled' />{apartment.cityName}, {apartment.building}</Typography>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',mt:1.5}}>
              <Box>
              <IconButton><BedroomParentIcon color='primary'/><Typography color="text.primary">{apartment.numberOfRooms}</Typography></IconButton>
              <IconButton><BathtubIcon color='primary' /><Typography color="text.primary">{apartment.numberOfBathrooms}</Typography></IconButton>
              </Box>
              <Typography color="primary">{apartment.price} {apartment.priceCurrency.name}</Typography>
              </Box>
            </Box>
          </Box>
  )
}

export default OwnerApartmentViewer
