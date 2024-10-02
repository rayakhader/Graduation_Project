import React from 'react'
import { jwtDecode } from 'jwt-decode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {  IconButton } from '@mui/material'
import { useApartmentDetailsRefresh } from '../../context/ApartmentDetailsRefresh';
import { useToken } from '../../../../globalContext/TokenContext';
import removeFavoriteApartmentByUserId from '../../../../API/favorite/removeFavoriteApartmentByUserId';
import addApartmentToFavorite from '../../../../API/favorite/addApartmentToFavorite';

function ToggleFavorite({add,setAdd,id,setOpen}) {
    const{refresh,setRefresh}=useApartmentDetailsRefresh()
    const{token}=useToken()
    const handleToggleFavorite = async()=>{
        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded['userId'];
          if(add){
            await removeFavoriteApartmentByUserId(token,userId,id,refresh,{setRefresh})
          }else{
            await addApartmentToFavorite(token,id,userId)
          }
          setAdd(!add)
      }
      else{
        setOpen(true)
      }
    }
  return (
    <IconButton aria-label="add to favorites" sx={{ color: 'black',backgroundColor:'white',m:1 }} onClick={handleToggleFavorite}>
           {add? <FavoriteIcon sx={{ fontSize: '1rem',color:'#d32f2f' }} /> :<FavoriteBorderIcon sx={{ fontSize: '1rem' }} />}
        </IconButton>
  )
}

export default ToggleFavorite
