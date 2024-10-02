import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import Cookies from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';
import Actions from './dashContent/Actions';
import Users from './dashContent/Users';
import { useNavigation } from '../../../../../customHook/useNavigation';
import getAdminInfo from '../../../../../API/users/getAdminInfo';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import { useAdminSettings } from '../../content/settings/context/RefreshAdminSettings';
import { useRole } from '../../../../../globalContext/RoleContext';
import { useRefreshToken } from '../../../../../globalContext/RefreshTokenContext';
function DashContentSec({setWasRefreshed}) {
  const [userId,setUserId]=useState('')
  const {token} =useToken()
  const{userRole}=useRole()
  const{refreshToken}=useRefreshToken()
  const[adminInfo,setAdminInfo]=useState({})
  const{refresh}=useAdminSettings()
  useEffect(()=>{
    if(userId){
    getAdminInfo(userId,{setAdminInfo})
    }
  },[userId,refresh])
  useEffect(()=>{
    userIdFromToken(token,setUserId)
  },[token])
  const {clickAdminDash,clickAdminSettings}=useNavigation()
  const handleLogout =  async () => {
    setWasRefreshed(true)
    try {
        Cookies.remove('refreshToken')
        Cookies.remove('role');
        Cookies.remove('token');
    } catch (error) {
        console.error('Failed to disconnect SignalR connection:', error);
    }
};
useEffect(()=>{
  if(!token&& !refreshToken&& !userRole){
    setWasRefreshed(false)
  }
},[token,userRole,refreshToken])
  return (
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'670px'}}>
      <Box>
      <List sx={{p:2}}>
      <ListItem button sx={{p:1,my:2}} onClick={clickAdminDash}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center'}}><DashboardIcon /></ListItemIcon>
        <ListItemText sx={{display:'flex',justifyContent:'start'}}>Dashboard</ListItemText>
       </ListItem>
       <Actions />
       <Users />
       <ListItem button sx={{p:1,my:2}} onClick={clickAdminSettings} >
        <ListItemIcon sx={{display:'flex',justifyContent:'center'}}><SettingsIcon /></ListItemIcon>
        <ListItemText sx={{display:'flex',justifyContent:'start'}}>Settings</ListItemText>
       </ListItem>
       </List>
       </Box>
       <Box sx={{width:'100%',p:2}}>
        <ListItem button sx={{p:1}} onClick={handleLogout}>
          <ListItemIcon sx={{display:'flex',justifyContent:'center'}}><LogoutIcon /></ListItemIcon>
          <ListItemText sx={{display:'flex',justifyContent:'start'}}>Log out</ListItemText>
        </ListItem>
       <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',p:1,borderRadius:'4px',border:'1px solid rgba(211,211,211,1)'}}>
        <Avatar src={adminInfo.imagePath} sx={{width:70,height:70}}/>
        <Box sx={{display:'flex',alignItems:'center',p:1,flexDirection:'column',justifyContent:'center'}}>
          <Typography variant='subtitle' >{adminInfo.fullName}</Typography>
          <Typography color='textSecondary' variant='body2'>{adminInfo.email}</Typography>
        </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default DashContentSec
