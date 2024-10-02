import { Avatar, Box, Dialog, DialogContent, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import getUserByIdProfile from '../../../../../API/users/getUserByIdProfile';
import getFollowingByUserId from '../../../../../API/following/getFollowingByUserId';
import getFollowersByUserId from '../../../../../API/followers/getFollowersByUserId';
import { useToken } from '../../../../../globalContext/TokenContext';
import getNumberOfApartments from '../../../../../API/apartments/getNumberOfApartments';

function ViewUser({viewUser,setViewUser,selectedUserId}) {
    const[userInfo,setUserInfo]=useState({})
    const[apartmentsNum,setApartmentsNum]=useState([])
    const[followingList,setFollowingList]=useState([])
    const[folowersList,setFollowersList]=useState([])
    const {token}=useToken()
    useEffect(()=>{
        if(selectedUserId!==''){
            getUserByIdProfile(selectedUserId,{setUserInfo})
        }
    },[selectedUserId,viewUser])
    useEffect(()=>{
        if(Object.keys(userInfo).length>0){
            if(userInfo.roleName==='Owner'){
                getNumberOfApartments(token,selectedUserId,{setApartmentsNum})
                getFollowingByUserId(selectedUserId,{setFollowingList})
                getFollowersByUserId(selectedUserId,{setFollowersList})
            }else if (userInfo.roleName==='Customer'){
                getFollowingByUserId(selectedUserId,{setFollowingList})
            }
        }
    },[userInfo])
  return (
    <Dialog open={viewUser} onClose={()=>setViewUser(false)} 
    sx={{'& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}
      >
        <DialogContent >
            <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',mb:1}}>
                <Avatar sx={{width:100,height:100}} src={userInfo.imagePath}/>
            </Box>
            <Box sx={{position:'absolute',top:10,right:10}}>
                <IconButton onClick={()=>setViewUser(false)}><CloseIcon /></IconButton>
            </Box>
            <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Typography variant='h6'>{userInfo.fullName}</Typography>
                     {userInfo.roleName==='Customer'&&
                     <Box variant='contained' sx={{backgroundColor:'#cce4f0',p:0.5,borderRadius:'4px',mb:1}}>Customer</Box>}
                     {userInfo.roleName==='Owner' &&
                     <Box variant='contained' sx={{backgroundColor:'#f0c7ec',p:0.5,borderRadius:'4px',mb:1}}>Owner</Box>}
                     {userInfo.roleName==='Admin'&&
                     <Box variant='contained' sx={{backgroundColor:'#1976d2',p:0.5,borderRadius:'4px',mb:1}}>Admin</Box>}
                     <Typography variant='body2' color='textSecondary' sx={{p:1.5}}>{userInfo.email}</Typography>

            </Box>
            {(userInfo.roleName==='Customer' || userInfo.roleName==='Owner') &&<><Divider sx={{width:'100%',border:'1px solid rgba(211,211,211,1)'}} />
            <Box sx={{display:'flex',alignItems:'center'}}>
            <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
                <Typography variant='h6'>{followingList.length}</Typography>
                <Typography color='textSecondary' variant='body2'>Following</Typography>
            </Box>
            {userInfo.roleName==='Owner'&& <Divider orientation="vertical" flexItem sx={{border:'1px solid rgba(211,211,211,1)'}}/> }
            {userInfo.roleName==='Owner'&&<Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
                <Typography variant='h6'>{folowersList.length}</Typography>
                <Typography color='textSecondary' variant='body2'>Followers</Typography>
            </Box> }
            {userInfo.roleName==='Owner'&& <Divider orientation="vertical" flexItem sx={{border:'1px solid rgba(211,211,211,1)'}}/> }
            {userInfo.roleName==='Owner'&&<Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
                <Typography variant='h6'>{apartmentsNum}</Typography>
                <Typography color='textSecondary' variant='body2'>Apartments</Typography>
            </Box> }
            </Box></>}
            <Divider sx={{width:'100%',border:'1px solid rgba(211,211,211,1)'}}  />
            <Box sx={{width:'100%',p:1.5}}>
                <Typography color='textSecondary' variant='body2'>Joined on:{userInfo.creationDate}</Typography>
            </Box>
        </DialogContent>
    </Dialog>
  )
}
export default ViewUser
