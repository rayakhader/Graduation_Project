import { Box, Grid, IconButton, Typography, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useToken } from '../../../globalContext/TokenContext';
import { jwtDecode } from 'jwt-decode';
import ItemViewer from './ItemViewer';
import getFavoriteApartmentsByUserId from '../../../API/favorite/getFavoriteApartmentsByUserId';
import { useNavigation } from '../../../customHook/useNavigation';
import { useFavoriteRefresh } from '../context/FavoriteRefresh';
import Footer from '../../../stableLayoutComponent/Footer';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation';
function Favorite() {
 const {clickWelcomePage}=useNavigation()
 const{token}=useToken()
 const {refresh}=useFavoriteRefresh()
 const [loading,setLoading]=useState(true)
 const[favoritesList,setFavoritesList]=useState([])

 const [userId,setUserId]=useState('')
 useResetFiltersOnNavigation()
 useEffect(()=>{
  if (token){
    const decoded = jwtDecode(token);
    const userId = decoded['userId'];
    setUserId(userId)
  }
 },[token])
 const fetchFavorites =()=>{
  getFavoriteApartmentsByUserId(token,userId,{setFavoritesList}).finally(()=>setLoading(false))
 }
 useEffect(()=>{
   if(!token){
     clickWelcomePage()
    }
 },[token])
 useEffect(()=>{
  if(userId){
  setLoading(true)
  fetchFavorites()
  }
 },[userId,refresh])
 
  return (
    <>
    <Grid container sx={{color:'black',mb:40}}>
      <Grid item xs={12} sx={{display:'flex',flexDirection:'column',p:2}}>
      <Typography sx={{textTransform:'uppercase',fontWeight:'bold',letterSpacing:1,fontSize:'20px'}}>
        <IconButton>
        <FavoriteIcon color='error' sx={{height:50,width:50}}  />
        </IconButton>Favorites</Typography>
      <Typography variant='body2' color="textSecondary" sx={{m:1}}>Here you find all your favorite apartments.</Typography>
      </Grid>
      <Grid item xs={12} container sx={{p:3}}>
         {loading ? (
          <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : <ItemViewer favoritesList={favoritesList} /> }
      </Grid>
    </Grid>
    
    <Footer />
    </>
  )
}
export default Favorite
