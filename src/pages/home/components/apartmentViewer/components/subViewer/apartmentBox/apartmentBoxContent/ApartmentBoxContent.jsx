import {Box, CardContent, IconButton, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFavorite } from '../../../../../../../favorites/context/FavoriteList';
import PlaceIcon from '@mui/icons-material/Place';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteDialog from '../../../../../FavoriteDialog';
import ToggleFavorite from './favoriteSec/ToggleFavorite';
import { useToken } from '../../../../../../../../globalContext/TokenContext';
import fetchFavorite from './favoriteSec/fetchFavorite';
import { useFavoriteHomeRefresh } from './favoriteSec/context/FavoriteHomeRefresh';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { useView } from '../../../../../filter/filterAbove/context/ViewContext';

function ApartmentBoxContent({apartment}) {
    const capitalize = (s) => s && s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const{setFavoriteList}=useFavorite()
    const{refresh}=useFavoriteHomeRefresh()
    const[open,setOpen]=useState(false)
    const [addToFavorite,setAddToFavorite]=useState(false)
    const{view}=useView()
      const{token}=useToken()
      useEffect(()=>{
         fetchFavorite(apartment.id,token,{setFavoriteList,setAddToFavorite})
      },[apartment,refresh,addToFavorite])
  return (
    <>
    <CardContent sx={{flexGrow:1,position:'relative',height:'100%',px:0,py:view==='list'?0:'normal'}}>
              <Typography gutterBottom component="p" sx={{fontWeight:'bold',color:'black'}}>
                {apartment.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{my:1}}>
                <PlaceIcon sx={{mr:0.5}} />
                {capitalize(apartment.cityName)}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb:1}} >
                <AccountBalanceIcon sx={{mr:0.5}} />
                {capitalize(apartment.universityName)}
              </Typography>
              <Box sx={{display:'flex',alignItems:'center',mb:1,justifyContent:'space-between',width:view==='grid'?'40%':'10%'}}>
               <Box sx={{display:'flex',alignItems:'center'}}><BedroomParentIcon sx={{color:'text.secondary'}} /><Typography color="text.primary">{apartment.numberOfRooms}</Typography></Box>
               <Box sx={{display:'flex',alignItems:'center'}}><BathtubIcon sx={{color:'text.secondary'}} /><Typography color="text.primary">{apartment.numberOfBathrooms}</Typography></Box>
              </Box>
        <Typography textAlign='end' color='black' fontWeight='bold' mb={2}>{apartment.price} {apartment.priceCurrency}</Typography>
         <Box sx={{display:'flex',position:'absolute',bottom:0,justifyContent:'center',width:'100%'}}><ToggleFavorite addToFavorite={addToFavorite} setAddToFavorite={setAddToFavorite} id={apartment.id} setOpen={setOpen}/></Box>
                </CardContent>
                <FavoriteDialog open={open} setOpen={setOpen}/>
 </>
  )
}
export default ApartmentBoxContent
