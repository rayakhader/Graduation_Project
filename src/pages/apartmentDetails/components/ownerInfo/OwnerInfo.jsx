import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { useToken } from '../../../../globalContext/TokenContext';
import getApartmentsByOwnerId from '../../../../API/apartments/getApartmentsByOwnerId';
import getFollowingByUserId from '../../../../API/following/getFollowingByUserId';
import getFollowersByUserId from '../../../../API/followers/getFollowersByUserId';
import userIdFromToken from '../../../../customHook/userIdFromToken';
import FollowButton from './FollowButton';
function OwnerInfo({ownerInfo}) {
  const {token} =useToken()
  const[senderId,setSenderId]=useState('')
  const[apartmentsList,setApartmentsList]=useState([])
  const[availableApartments,setAvailableApartments]=useState([])
  const[notAvailableApartments,setNotAvailableApartments]=useState([])
  const[visibleApartments,setVisibleApartments]=useState([])
  const[notVisibleApartments,setNotVisibleApartments]=useState([])
  const[discountedApartments,setDiscountedApartments]=useState([])
  const[followingList,setFollowingList]=useState([])
  const[followersList,setFollowersList]=useState([])
  useEffect(()=>{
    if(Object.keys(ownerInfo).length !== 0){
    getApartmentsByOwnerId(token,ownerInfo.id,{setApartmentsList,setAvailableApartments,setNotAvailableApartments,setVisibleApartments,setNotVisibleApartments,setDiscountedApartments})
    getFollowingByUserId(ownerInfo.id,{setFollowingList})
    getFollowersByUserId(ownerInfo.id,{setFollowersList})
    }
  },[ownerInfo])
  useEffect(()=>{
    userIdFromToken(token,setSenderId)
  },[token])
  const handleWhatsAppClick = () => {
    const phoneNumber = ownerInfo.phoneNumber.replace(/\D/g, ''); 
    const message = 'Hello, I would like to discuss your property.'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    window.open(whatsappURL, '_blank'); 
  };
  return (
    <Card sx={{ height:'500px',backgroundColor:'#1976d2',boxShadow:5, filter: token ? 'none':'blur(5px)', 
    pointerEvents:token? 'auto' : 'none' 
   }} id="ownerInfo-card">
     <CardContent sx={{height:'100%',p:0}}>
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#1976d2',color:'white',position:'relative',height:'75%'}}>
            <Avatar src={ownerInfo.imagePath} alt={ownerInfo.fisrtName} sx={{height:100,width:100}}/>
             <Typography variant='h5'>{ownerInfo.fullName}</Typography>
             <Typography sx={{color:'rgba(255,255,255,0.6)'}}> <LocationOnIcon fontSize='10px'/>{ownerInfo.cityName}</Typography>
             {(ownerInfo.id!==senderId) && <FollowButton ownerId={ownerInfo.id} senderId={senderId} />}
             <Box sx={{mt:5,display:'flex'}}>
                 <WhatsApp sx={{cursor:'pointer',fontSize:'40px'}} onClick={handleWhatsAppClick}  />
                 </Box>
         </Box>
         <Box sx={{backgroundColor:'white',display:'flex',alignItems:'center', justifyContent:'space-around',height:'35%'}}>
             <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                 <Typography sx={{fontWeight:'bold'}}>{apartmentsList.length}</Typography>
                 <Typography sx={{color:'#1976d2'}}>Apartments</Typography>
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                 <Typography sx={{fontWeight:'bold'}}>{followersList.length}</Typography>
                 <Typography sx={{color:'#1976d2'}}>Followers</Typography>
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                 <Typography sx={{fontWeight:'bold'}}>{followingList.length}</Typography>
                 <Typography sx={{color:'#1976d2'}}>Following</Typography>
             </Box>
         </Box>
     </CardContent>
    </Card>
  )
}

export default OwnerInfo
