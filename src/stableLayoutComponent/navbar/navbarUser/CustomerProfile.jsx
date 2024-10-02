import React, { useEffect, useState } from 'react'
import { Box,Grid } from '@mui/material'
import {IconButton, Typography } from '@mui/material'
import EventIcon from '@mui/icons-material/Event';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import {Card, CardContent } from '@mui/material'
import { Avatar} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import getFollowingByUserId from '../../../API/following/getFollowingByUserId';
function CustomerProfile({userInfo}) {
  const [followingList,setFollowingList]=useState([])
  useEffect(()=>{
    if(Object.keys(userInfo).length>0){
      getFollowingByUserId(userInfo.id,{setFollowingList})
    }
  },[userInfo])
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
        <FollowTheSignsIcon fontSize="small" />
      </IconButton>{followingList.length} Following</Typography>
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

export default CustomerProfile
