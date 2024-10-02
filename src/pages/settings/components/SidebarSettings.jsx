import { Box, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigation } from '../../../customHook/useNavigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function SidebarSettings() {
    const {clickAccount,clickChangePass,clickHome}=useNavigation()
    const navigate = useNavigate()
  return (
    <Grid container item sx={{width:{xs:'100%',md:'30%'},color:'black'}} >
        <Grid item xs={2} sx={{display:'flex',justifyContent:'center',p:1,borderBottom:{xs:'1px solid rgba(211,211,211,0.5)'}}}>
            <Box sx={{height:'100%',display:'flex',flexDirection:'column',gap:2}}>
                <IconButton sx={{color:'#bdbdbd'}} title='Home' onClick={()=>clickHome()} >
                    <HomeIcon />
                </IconButton>
                <IconButton sx={{color:'#bdbdbd'}} title='Dashboard' onClick={()=>navigate('/dashboard')}>
                    <DashboardIcon />
                </IconButton>
                <IconButton sx={{color:'#bdbdbd',backgroundColor:'rgba(211, 211, 211, 0.5)'}} title='Settings'>
                    <SettingsIcon />
                </IconButton>
            </Box>
        </Grid>
        <Grid item xs={10} sx={{borderLeft:'1px solid rgba(211,211,211,0.5)',borderRight:'1px solid rgba(211,211,211,0.5)',borderBottom:{xs:'1px solid rgba(211,211,211,0.5)'}}}>
            <Typography sx={{letterSpacing:2,width:'100%',pl:6,pr:6,pt:2}} variant='body2'color='textSecondary' >Settings</Typography>
           <List sx={{pl:2,pr:2}}>
            <ListItem button onClick={clickAccount}>
            <ListItemIcon sx={{display:'flex',justifyContent:'center',color:'#bdbdbd'}} >
            <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText sx={{display:'flex',justifyContent:'start'}}>My Account</ListItemText>
            </ListItem>
            <ListItem button onClick={clickChangePass}>
            <ListItemIcon sx={{display:'flex',justifyContent:'center',color:'#bdbdbd'}} >
            <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText sx={{display:'flex',justifyContent:'start'}} >Change Password</ListItemText>
            </ListItem>
           </List>
        </Grid>

    </Grid>
  )
}
export default SidebarSettings
