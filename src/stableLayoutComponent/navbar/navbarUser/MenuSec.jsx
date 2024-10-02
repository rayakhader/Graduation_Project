import React from 'react'
import { Avatar, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Typography,Box,Divider} from '@mui/material';
import { useNavigation } from '../../../customHook/useNavigation';
import { useAnchorElement } from './context/AnchorElement';
import handleLogout from '../handleLogout';
import { useNavigate } from 'react-router-dom';

function MenuSec({userInfo}) {
    const {clickDashboard,clickSettings}= useNavigation();
    const {anchorEl,open,handleClose}=useAnchorElement()
    const navigate = useNavigate()
    const handleViewProfile = ()=>{
      const path = `/profile/${userInfo.id}`;
      navigate(path); 
    }
  return (
    <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
            <MenuItem onClick={handleViewProfile}>
            <Box sx={{display:'flex', justifyContent:'space-around'}}>
            <Avatar src={userInfo.imagePath} sx={{height:80,width:80}}/>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',ml:1}}>
            <Typography sx={{fontWeight:'bold'}}>{userInfo.fullName}</Typography>
            <Typography color="textSecondary" sx={{mt:1}}>{userInfo.email}</Typography>
            </Box>
            </Box>
            </MenuItem>
            <Divider sx={{border:'1px solid rgba(0,0,0,0.2)'}} />
            <MenuItem sx={{p:2}} onClick={clickDashboard}><DashboardIcon sx={{ mr: 1 }} />Dashboard</MenuItem>
            <MenuItem  sx={{p:2}} onClick={clickSettings}><SettingsIcon sx={{ mr: 1 }} />Settings</MenuItem>
            <MenuItem  sx={{p:2}} onClick={()=>handleLogout()}><ExitToAppIcon sx={{ mr: 1 }} />Log out</MenuItem>
      </Menu>
  )
}

export default MenuSec
