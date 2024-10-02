import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import settings from '../style/sliderSettings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business'; 
import LocationCityIcon from '@mui/icons-material/LocationCity'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import Slider from 'react-slick';
import btnStyle from '../style/btnStyle';
import btnPriceStyle from '../style/btnPriceStyle';
import { useToken } from '../../../globalContext/TokenContext';
import { jwtDecode } from 'jwt-decode';
import removeFavoriteApartmentByUserId from '../../../API/favorite/removeFavoriteApartmentByUserId';
import getApartmentImagesById from '../../../API/apartments/getApartmentImagesById';
import { useFavoriteRefresh } from '../context/FavoriteRefresh';
import { useNavigate } from 'react-router-dom';
function Item({item}) {
    const {token}=useToken()
    const [images,setImages]=useState([])
    const{refresh,setRefresh}=useFavoriteRefresh()
    const navigate = useNavigate();
    const handleRemoveFavorite=(event,apartmentId)=>{
      event.stopPropagation()
        if (token){
          const decoded = jwtDecode(token);
          const userId = decoded['userId'];
          removeFavoriteApartmentByUserId(token,userId,apartmentId,refresh,{setRefresh})
        }
      }
      useEffect(()=>{
        getApartmentImagesById(item.id,{setImages})
      },[item])
      const handleApartment=(id)=>{
        const path =`/home/apartment/${id}`
        navigate(path)
      }
  return (
    <Card onClick={()=>handleApartment(item.id)} sx={{position:'relative',border:'1px solid rgba(211,211,211,1)',backgroundColor:'rgba(211,211,211,0.13)',cursor:'pointer',height:'350px'}}>
    <CardContent  sx={{ flex: '0 0 auto' }}>
      <Typography sx={{fontWeight:'bold'}}>{item.name}</Typography>
      <Box onClick={(event)=>handleRemoveFavorite(event,item.id)}  sx={{position:'absolute',top:10,right:10,cursor:'pointer'}}>
       <FavoriteIcon color='error' />
      </Box>
      <Box sx={{ display: 'flex', mb: 3, mt: 1, flexWrap: 'wrap', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
                        <Button startIcon={<BusinessIcon />} sx={btnStyle}>{item.building}</Button>
                        <Button startIcon={<LocationCityIcon />} sx={btnStyle}>{item.cityName}</Button>
                    </Box>
                    <Box>
                    <Button startIcon={<AccountBalanceIcon />}  sx={{...btnStyle}}>{item.universityName}</Button>
                    </Box>
                </Box>
      <Box sx={{position:'relative'}}>
      <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index} >
                      <img src={image.imagePath} alt={`Slide ${index}`} style={{ width: "100%",maxHeight:'150px',objectFit:'cover',position:'relative'}} />
                    </div>
                  ))}
                 </Slider>
                 <Box sx={{ position: 'absolute', right: 10,bottom:'90%', zIndex: 5 }}>
               <Button sx={btnPriceStyle}>{item.price} {item.priceCurrency}</Button>
             </Box>
                 </Box>
    </CardContent>
   </Card>
  )
}

export default Item
