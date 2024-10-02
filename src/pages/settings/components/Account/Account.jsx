import {  Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ImageSec from './imageSec/ImageSec';
import FormSec from './FormSec/FormSec';
import { jwtDecode } from 'jwt-decode';
import { useToken } from '../../../../globalContext/TokenContext';
import { useUserImage } from './context/UserImage';
import getAllCities from '../../../../API/city/getAllCities';
import { useAccountData } from './context/AccountData';
import { useSaveChanges } from './context/SaveChanges';
import updateUserInfo from '../../../../API/users/updateUserInfo';
import Update from './FormSec/Update';
import getUserByIdAccount from '../../../../API/users/getUserByIdAccount';
import { useRefreshAccount } from './context/RefreshAccount';
import { useCheckChange } from './context/CheckChange';
import { useSelectedCountry } from './context/SelectedCountryAccount';
import { useRole } from '../../../../globalContext/RoleContext';
function Account() {
  const {token}=useToken()
  const [userInfo,setUserInfo]=useState({})
  const [citiesList,setCitiesList]=useState([])
  const {firstName,lastName,city,phoneNumber,setFullName,setFirstName,setLastName,setCity,setPhoneNumber}=useAccountData()
  const{selectedCountry,setSelectedCountry}=useSelectedCountry()
  const{confirm,setConfirm,setSaveChanges}=useSaveChanges()
  const[updated,setUpdated]=useState(false)
  const {userImage}=useUserImage()
  const{userRole}=useRole()
  const {refresh,setRefresh}=useRefreshAccount()
  const{setChange}=useCheckChange()
    useEffect(()=>{
      getAllCities({setCitiesList})
    },[])
    useEffect(()=>{
      if(token){
      const decoded = jwtDecode(token);
      const userId = decoded['userId'];
      getUserByIdAccount(userRole,userId,refresh,{setUserInfo,setFullName,setFirstName,setLastName,setCity,setPhoneNumber,setSelectedCountry,setRefresh})
      }
    },[userImage])
    useEffect(()=>{
      if(confirm){
        if(token){
          let ownerPhoneNumberOrEmpty = phoneNumber
          if(userRole==='Owner'){
            ownerPhoneNumberOrEmpty = selectedCountry.code + phoneNumber.replace(/^\+\d+/, "")}
          updateUserInfo(token,firstName,lastName,ownerPhoneNumberOrEmpty,city,refresh,{setConfirm,setUpdated,setSaveChanges,setRefresh,setChange})
          }
      }
    },[confirm])
  return (
    <Grid container item sx={{width:{xs:'100%',md:'70%'},color:'black',p:2,display:'flex',flexDirection:'column',gap:2}} >
        <Typography variant='h6' sx={{textAlign:'start'}}>Edit Personal Details</Typography>
       <ImageSec userInfo={userInfo}/>
       <FormSec citiesList={citiesList} userInfo={userInfo} />
       <Update updated={updated} setUpdated={setUpdated}/>
    </Grid>
  )
}
export default Account
