import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getAdminInfo from '../../../../../API/users/getAdminInfo';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import { useAdminSettings } from './context/RefreshAdminSettings';
import ChangePasswordContainer from './ChagePasswordContainer';
import ProfileDetails from './ProfileDetails';
import getAllCities from '../../../../../API/city/getAllCities';

function AdminSettings() {
  const countryData = [
    { name: "Palestine", code: "+970", flag: "ps" },
    { name: "Palestine", code: "+972", flag: "ps" },
  ];
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const [city,setCity]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [selectedCountry,setSelectedCountry]=useState(countryData[0])
  const[userId,setUserId]=useState('')
  const [adminInfo,setAdminInfo]= useState('')
  const {refresh}=useAdminSettings()
  const{token}=useToken()
  const [citiesList,setCitiesList]=useState([])
  useEffect(()=>{
    userIdFromToken(token,setUserId)
  },[token])
  useEffect(()=>{
    getAllCities({setCitiesList})
  },[])
  useEffect(()=>{
    if(userId){
    getAdminInfo(userId,{setAdminInfo})
    }
  },[userId,refresh])
  useEffect(()=>{
    if(adminInfo){
      const fullName= adminInfo.fullName
      const [firstName, lastName] = fullName.split(' ');
       setFirstName(firstName)
       setLastName(lastName)
       setEmail(adminInfo.email)
       setCity(adminInfo.cityName)
       const phoneNumber = adminInfo.phoneNumber;
       let countryCode = '';
       let number = phoneNumber;
       if (phoneNumber.startsWith('+972')) {
         countryCode = '+972';
         number = phoneNumber.slice(4); 
       } else if (phoneNumber.startsWith('+970')) {
         countryCode = '+970';
         number = phoneNumber.slice(4); 
       }
       setPhoneNumber(number);
       const selectedCountry = countryData.find((country) => country.code === countryCode);
       setSelectedCountry(selectedCountry);
    }
  },[adminInfo])
  return (
    <Grid item  xs={11} md={9} lg={10} sx={{p:2,backgroundColor:'rgba(211,211,211,0.15)'}} >
      <Grid item xs={12} sx={{px:1.5}} >
      <Box sx={{width:'100%',backgroundColor:'rgba(211,211,211,0.15)',p:1.5,borderRadius:'20px',display:'flex',alignItems:'center'}}>
          <Typography variant='h6' sx={{fontWeight:'bold'}}>Account Settings</Typography>
      </Box>
      </Grid>
      <Grid item container xs={12}>
      <Grid item xs={12}  sx={{p:1.5}}>
       <ProfileDetails citiesList={citiesList} adminInfo={adminInfo} firstName={firstName} lastName={lastName} email={email} city={city} phoneNumber={phoneNumber} selectedCountry={selectedCountry} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setCity={setCity} setPhoneNumber={setPhoneNumber} setSelectedCountry={setSelectedCountry} />
      </Grid>
      <Grid item xs={12} sx={{p:1.5}}>
      <ChangePasswordContainer />
      </Grid>
      </Grid>
    </Grid>
  )
}

export default AdminSettings
