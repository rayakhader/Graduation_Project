import { Box, Grid, InputAdornment, TextField, Typography,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EventIcon from '@mui/icons-material/Event';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddDialog from './AddDialog';
import EditDialog from './EditDialog';
import CitiesList from './CitiesList';
import { useRefresh } from '../context/RefreshContext';
import getAllCities from '../../../../../../API/city/getAllCities';
import { useToken } from '../../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../../customHook/userIdFromToken';
import getAdminInfo from '../../../../../../API/users/getAdminInfo';

function City() {
  const [citiesList,setCitiesList]=useState([])
  const [addCity,setAddCity]=useState(false)
  const[editCity,setEditCity]=useState(false)
  const[cityName,setCityName]=useState('')
  const{refresh}=useRefresh()
  const{token}=useToken()
  const[adminId,setAdminId]=useState('')
  const[adminInfo,setAdminInfo]=useState({})
 useEffect(()=>{
  getAllCities({setCitiesList})
 },[refresh])
 useEffect(()=>{
  userIdFromToken(token,setAdminId)
 },[token])
 useEffect(()=>{
  if(adminId){
    getAdminInfo(adminId,{setAdminInfo})
  }
 },[adminId])
  const filteredCitiesList = citiesList.filter(city =>
  city.name.toLowerCase().includes(cityName.toLowerCase()))
  return (
    <Grid item container xs={11} md={9} lg={10} sx={{p:2,backgroundColor:'rgba(211,211,211,0.15)'}} >
      <Box sx={{width:{xs:'100%',md:'80%',lg:'50%'},mx:'auto',backgroundColor:'white',px:5,py:2,borderRadius:'20px'}}>
      <Box sx={{width:'100%',p:1.5,textAlign:'start',my:2}}>
        <Typography variant='h5' sx={{textAlign:'start',letterSpacing:2,fontWeight:'bold'}}>
          Welcome {adminInfo.fullName}
        </Typography>
        <Typography variant='body2' color='textSecondary' sx={{mt:1}}>Here you can add or edit city.</Typography>
      </Box>
        <Box sx={{width:'100%',backgroundColor:'rgba(211,211,211,0.15)',p:1.5,borderRadius:'20px',display:'flex',alignItems:'center'}}>
          <Typography variant='h6' sx={{fontWeight:'bold'}}>Cities</Typography>
          <Typography color='textSecondary'>({citiesList.length})</Typography>
        </Box>
        <Box sx={{width:'100%',backgroundColor:'rgba(211,211,211,0.15)',display:'flex',flexDirection:'column',my:2,boxShadow:5,borderRadius:'20px'}}>
         <Box sx={{display:'flex',alignItems:'center',flexWrap:'wrap',justifyContent:'space-between',mt:2,p:1.5}}>
          <TextField
          placeholder='Search by name'
          type='text'
          value={cityName}
          onChange={(e)=>setCityName(e.target.value)}
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                 <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={{'& .MuiInputBase-input': { height: '10px'},'& .MuiOutlinedInput-root':{backgroundColor:'white',borderRadius:'20px'}}}
          />
          <Box >
          <Button startIcon ={<AddIcon />} variant='contained' color='primary' onClick={()=>setAddCity(true)} sx={{mt:{xs:1,md:1,lg:0}}}>Add new City</Button>
          </Box>
          </Box>
          <Box sx={{width:'100%',p:2}}>
            <Box sx={{display:'flex',flexWrap:{xs:'wrap',md:'nowrap'},gap:1,alignItems:'center',width:'100%',border:'1px solid rgba(211,211,211,1)',backgroundColor:'white',mb:1,boxShadow:1,borderRadius:'4px',p:1.5}}>
             <Box sx={{width:{xs:'100%',md:'80%',lg:'50%'},p:1.5,border:'1px solid rgba(211,211,211,1)',borderRadius:'4px',display:'flex',alignItems:'center',gap:1}}>
             <LocationCityIcon  />
             <Typography sx={{fontWeight:'bold'}}>Name</Typography>
              </Box> 
              <Box sx={{width:{xs:'100%',md:'80%',lg:'50%'},p:1.5,border:'1px solid rgba(211,211,211,1)',borderRadius:'4px',display:'flex',alignItems:'center',gap:1}}>
             <EventIcon />
             <Typography  sx={{fontWeight:'bold'}}>Added on</Typography>
              </Box> 
            </Box>
           <CitiesList citiesList={filteredCitiesList} editCity={editCity} setEditCity={setEditCity} />
          </Box>
         </Box>
        </Box>
       <AddDialog addCity={addCity} setAddCity={setAddCity} />
       <EditDialog editCity={editCity} setEditCity={setEditCity} />
   </Grid>
  )
}
export default City
