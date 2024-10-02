import { Button } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useToken } from '../../../../../../../../../globalContext/TokenContext';
import { jwtDecode } from 'jwt-decode';
import removeFavoriteApartmentByUserId from '../../../../../../../../../API/favorite/removeFavoriteApartmentByUserId';
import addApartmentToFavorite from '../../../../../../../../../API/favorite/addApartmentToFavorite';
import { useFavoriteHomeRefresh } from './context/FavoriteHomeRefresh';

function ToggleFavorite({addToFavorite,setAddToFavorite,id,setOpen}) {
    const{refresh,setRefresh}=useFavoriteHomeRefresh()
    const{token}=useToken()
    const handleToggleFavorite = async(event)=>{
      event.stopPropagation()
        if (token) {
          const decoded = jwtDecode(token);
          const userId = decoded['userId'];
          if(addToFavorite){
            await removeFavoriteApartmentByUserId(token,userId,id,refresh,{setRefresh})
          }else{
            await addApartmentToFavorite(token,id,userId)
          }
          setAddToFavorite(!addToFavorite)
      }
      else {
        setOpen(true)
      }
    }
  return (
    <Button onClick={handleToggleFavorite} fullWidth sx={{border:'1px solid rgba(0, 0, 0, 0.1)',color:'rgba(0, 0, 0, 0.54)','&:hover': addToFavorite?{}:{backgroundColor:'#1976d2',color:'white'}
}}>{addToFavorite?<FavoriteIcon color='error' />:<FavoriteBorderIcon/>}{addToFavorite?'Added':'Add to favorite'}</Button>
  )
}

export default ToggleFavorite
