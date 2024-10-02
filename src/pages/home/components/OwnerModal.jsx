import { Avatar, Box, Button, Dialog, DialogContent, IconButton,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WhatsApp from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import getApartmentsByOwnerId from '../../../API/apartments/getApartmentsByOwnerId';
import getFollowersByUserId from '../../../API/followers/getFollowersByUserId';
import getFollowingByUserId from '../../../API/following/getFollowingByUserId';
import getApartmentById from '../../../API/apartments/getApartmentById';
import { useToken } from '../../../globalContext/TokenContext';
import userIdFromToken from '../../../customHook/userIdFromToken';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import followOwner from '../../../API/follow/followOwner';
import unfollowOwner from '../../../API/follow/unfollowOwner';
import { useNavigate } from 'react-router-dom';

function OwnerModal({selectedApartmentId,open,setOpen}) {
  const[ownerInfo,setOwnerInfo]=useState({})
  const[apartmentDetails,setApartmentDetails]=useState({})
  const[apartmentsList,setApartmentsList]=useState([])
  const[availableApartments,setAvailableApartments]=useState([])
  const[notAvailableApartments,setNotAvailableApartments]=useState([])
  const[visibleApartments,setVisibleApartments]=useState([])
  const[notVisibleApartments,setNotVisibleApartments]=useState([])
  const[discountedApartments,setDiscountedApartments]=useState([])
  const[followingList,setFollowingList]=useState([])
  const[followersList,setFollowersList]=useState([])
  const[isFollowing,setIsFollowing]=useState(false)
  const{token}=useToken()
  const[userId,setUserId]=useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    if(token){
      userIdFromToken(token,setUserId)
    }
  },[token])
  const handleClose=(event)=>{
    event.stopPropagation()
    setOpen(false)
   }
   const handleClick=(event,ownerPhoneNumber)=>{
    event.stopPropagation()
    const url = `https://wa.me/${ownerPhoneNumber}`;
    window.open(url, '_blank');
   }
   useEffect(()=>{
    if(selectedApartmentId && open){
    getApartmentById(selectedApartmentId,{setApartmentDetails,setOwnerInfo})
    }
   },[selectedApartmentId,open])
   useEffect(()=>{
    if(Object.keys(ownerInfo).length !== 0){
    getApartmentsByOwnerId(token,ownerInfo.id,{setApartmentsList,setAvailableApartments,setNotAvailableApartments,setVisibleApartments,setNotVisibleApartments,setDiscountedApartments})
    getFollowersByUserId(ownerInfo.id,{setFollowersList})
    getFollowingByUserId(ownerInfo.id,{setFollowingList})
    }
   },[ownerInfo])
   useEffect(()=>{
    if(followersList.length>0 && userId){
      const userIsFollowing = followersList.some(follower => follower.id.toLowerCase() === userId.toLowerCase());
      setIsFollowing(userIsFollowing)
    }
   },[followersList,userId])
   const handleFollow =(event)=>{
    event.stopPropagation()
      if(isFollowing){
        unfollowOwner(token,ownerInfo.id)
      }else {
        followOwner(token,ownerInfo.id)
      }
      setIsFollowing(!isFollowing)
   }
   const handleViewProfile = (event)=>{
    event.stopPropagation()
    const path = `/profile/${ownerInfo.id}`;
    navigate(path);
   }
  return (
    <Dialog
    open={open}
    onClose={handleClose}
  >
    <DialogContent>
      <IconButton sx={{position:'absolute',top:0,right:0}} onClick={handleClose} >
        <CloseIcon />
      </IconButton>
     <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:2,p:1.5}}>
      <Avatar src={ownerInfo.imagePath} sx={{height:100,width:100, borderRadius:5}}/>
      <Box sx={{display:'flex',alignItems:'center',p:1.5,border:'1px solid rgba(211,211,211,1)',borderRadius:5}}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
        <Typography color='textSecondary'>{apartmentsList.length}</Typography>
        <Typography fontWeight="bold">Apartments</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
        <Typography color='textSecondary'>{followingList.length}</Typography>
        <Typography fontWeight="bold">Following</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
        <Typography color='textSecondary'>{followersList.length}</Typography>
        <Typography fontWeight="bold">Followers</Typography>
        </Box>
      </Box>
     </Box>
     <Box sx={{px:1.5,display:'flex',flexDirection:'column'}}>
      <Typography variant='h6' sx={{textAlign:'start'}}>{ownerInfo.fullName}</Typography>
      <Box sx={{display:'flex',alignItems:'center'}}>
      <LocationOnIcon sx={{fontSize:18}} />
      <Typography variant='body2'>{ownerInfo.cityName}</Typography>
     </Box>
     </Box>
     <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:2,p:1.5}}>
      <Button variant='outlined' disabled={ownerInfo.id?.toLowerCase()===userId?.toLowerCase()} onClick={handleFollow} startIcon={isFollowing?<PersonRemoveIcon />:<PersonAddIcon />} sx={{border:'1px solid rgba(211,211,211,1)',color:'black',textTransform:'none'}}>{isFollowing?'Unfollow':'follow'}</Button>
      <Button variant='outlined' onClick={(event)=>handleClick(event,ownerInfo.phoneNumber)} startIcon={<WhatsApp sx={{color:'green'}}/>} sx={{border:'1px solid rgba(211,211,211,1)',color:'black',textTransform:'none'}}>Contact</Button>
      <Button variant='outlined' onClick={handleViewProfile} startIcon={<AccountCircleIcon />} sx={{border:'1px solid rgba(211,211,211,1)',color:'black',textTransform:'none'}}>View Profile</Button>
     </Box>
    </DialogContent>
  </Dialog>
  )
}

export default OwnerModal
