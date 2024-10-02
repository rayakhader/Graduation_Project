import React, { useEffect, useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import {  Divider, IconButton, Typography } from '@mui/material'
import EventIcon from '@mui/icons-material/Event';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import {Card, CardContent } from '@mui/material'
import { Avatar} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group'; 
import WhatsApp from '@mui/icons-material/WhatsApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import getFollowersByUserId from '../../../API/followers/getFollowersByUserId';
import getFollowingByUserId from '../../../API/following/getFollowingByUserId';
import getNumberOfApartments from '../../../API/apartments/getNumberOfApartments';
import { useToken } from '../../../globalContext/TokenContext';
import userIdFromToken from '../../../customHook/userIdFromToken';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import followOwner from '../../../API/follow/followOwner';
import unfollowOwner from '../../../API/follow/unfollowOwner';

function OwnerProfile({userInfo}) {
  const[followersList,setFollowersList]=useState([])
  const[follwingList,setFollowingList]=useState([])
  const[apartmentsNum,setApartmentsNum]=useState(0)
  const{token}=useToken()
  const[userId,setUserId]=useState('')
  const[isFollowing,setIsFollowing]=useState(false)
  useEffect(()=>{
    if(Object.keys(userInfo).length>0){
      getFollowingByUserId(userInfo.id,{setFollowingList})
      getFollowersByUserId(userInfo.id,{setFollowersList})
      getNumberOfApartments(token,userInfo.id,{setApartmentsNum})
    }
  },[userInfo])
  useEffect(()=>{
    if(token){
      userIdFromToken(token,setUserId)
    }
  },[token])

  useEffect(()=>{
    if(followersList.length>0 && userId){
    const userIsFollowing = followersList.some(follower => follower.id.toLowerCase() === userId.toLowerCase());
    setIsFollowing(userIsFollowing)}
  },[followersList,userId])

    const handleClick=(ownerPhoneNumber)=>{
        const url = `https://wa.me/${ownerPhoneNumber}`;
        window.open(url, '_blank');
       }
       const handleFollow =()=>{
        if(isFollowing){
          unfollowOwner(token,userInfo.id)
        }else {
          followOwner(token,userInfo.id)
        }
        setIsFollowing(!isFollowing)
     }
  return (
    <Grid container item  sx={{backgroundColor:'rgba(211, 211, 211, 0.13)'}}>
    <Grid item container xs={12}>
       <Box sx={{width:{
          xs:'100%',
          sm:'80%',
          md:'50%',
          lg:'40%'
         },
         margin:'auto',
         display:'flex',
         justifyContent:'center',
         flexDirection:'column',
         }}>
            <Grid item sx={{p:2}} >
       <Card sx={{backgroundColor:'white',boxShadow:5,border:'1px solid rgba(211,211,211,1)',textAlign:'center'}}>
           <CardContent>
           <Box sx={{backgroundImage:'linear-gradient(135deg, #1976d2 0%, #ffc1e3 100%)',width:'100%',height:180,position:'relative',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'4px'}}>
   <Box sx={{position:'absolute',bottom:-30,height:100,width:100}}>
    <Avatar 
    src={userInfo.imagePath}
    sx={{height:100,width:100}}   
/>
</Box>        
</Box>
             <Box sx={{width:'100%',mt:5}}>
              <Typography variant='h6' sx={{fontWeight:'bold'}}>{userInfo.fullName}</Typography>
              <Box sx={{width:'100%',display:'flex', alignItems:'center',justifyContent:'center',gap:1.5}}>
                   <Typography sx={{color:'rgba(0,0,0,0.35)',my:1,p:0.5}}><IconButton size="small">
       <ApartmentIcon fontSize="small" />
     </IconButton>{apartmentsNum} Apartments</Typography>
     <Divider orientation="vertical" flexItem sx={{border:'1px solid rgba(211,211,211,1)'}} />
                   <Typography sx={{color:'rgba(0,0,0,0.35)',my:1,p:0.5}}><IconButton size="small" >
       <GroupIcon fontSize="small" />
     </IconButton>{followersList.length} Followers</Typography>
     <Divider orientation="vertical" flexItem sx={{border:'1px solid rgba(211,211,211,1)'}} />
                   <Typography sx={{color:'rgba(0,0,0,0.35)',my:1,p:0.5}}><IconButton size="small">
       <FollowTheSignsIcon fontSize="small" />
     </IconButton>{follwingList.length} Following</Typography>
               </Box>
               <Box sx={{display:'flex',alignItems:'center',gap:2,py:1.5}}>
     <Button variant='outlined' disabled={userInfo.id?.toLowerCase()===userId?.toLowerCase()} onClick={handleFollow} startIcon={isFollowing?<PersonRemoveIcon />:<PersonAddIcon />} sx={{border:'1px solid rgba(211,211,211,1)',color:'black',textTransform:'none'}}>{isFollowing?'Unfollow':'Follow'}</Button>
     <Button variant='outlined' onClick={()=>handleClick(userInfo.phoneNumber)} startIcon={<WhatsApp sx={{color:'green'}}/>} sx={{border:'1px solid rgba(211,211,211,1)',color:'black',textTransform:'none'}}>Contact</Button>
    </Box>
             </Box>
           </CardContent>
       </Card>
   </Grid>
   <Grid item sx={{p:2}}>
     <Card sx={{backgroundColor:'white',boxShadow:5,border:'1px solid rgba(211,211,211,1)',p:2}}>
           <CardContent sx={{p:0}} >
               <Typography variant='h6' sx={{color:'black',textAlign:'start',borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>Information</Typography>
               <Box sx={{display:'flex',justifyContent:'space-between',my:1,p:1.5}}>
                   <Typography variant='body2' sx={{color:'rgba(0,0,0,0.35)'}} ><EmailIcon sx={{mr:1}} />Email</Typography>
                   <Typography>{userInfo.email}</Typography>
               </Box>
               {userInfo.phoneNumber && <Box sx={{display:'flex',justifyContent:'space-between',my:1,p:1.5}}>
                   <Typography variant='body2' sx={{color:'rgba(0,0,0,0.35)'}} ><PhoneIcon sx={{mr:1}}/>Phone</Typography>
                   <Typography>{userInfo.phoneNumber}</Typography>
               </Box>}
               <Box sx={{display:'flex',justifyContent:'space-between',my:1,p:1.5}}>
                   <Typography variant='body2' sx={{color:'rgba(0,0,0,0.35)'}} ><EventIcon sx={{mr:1}} />Joined</Typography>
                   <Typography>{userInfo.creationDate}</Typography>
               </Box>
           </CardContent>
       </Card>
   </Grid>
     </Box>
     </Grid>
   </Grid>
  )
}

export default OwnerProfile
