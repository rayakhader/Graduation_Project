import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Switch, useMediaQuery } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useExpanded } from '../../context/ExpandedSidebar'
import { useSelectedItem } from '../../context/SelectedItemContext';
import { useNavigation } from '../../../../customHook/useNavigation';
import { useTheme } from '@mui/material/styles';

function SideBarCustomer() {
  const drawerItems = useMemo(()=>[{text:'Dashboard',Icon:DashboardIcon,path:'/dashboard'},
    {text:'Following',Icon:FollowTheSignsIcon,path:'/dashboard/following'},
    {text:'Notifications',Icon:NotificationsIcon,path:'/dashboard/notifications'}],[])
    
    const{selectedItem,setSelectedItem}=useSelectedItem()
    const{expanded,setExpanded}=useExpanded()
    const [darkMode,setDarkMode]=useState(false)
    const theme = useTheme();
    const isXsOrSmOrMd = useMediaQuery(theme.breakpoints.down('lg'));
    const location = useLocation();


    const toggleDarkMode=()=>{
      setDarkMode(!darkMode)
    }
    const handleToggleDrawer =()=>{
      setExpanded(!expanded)
    }
    const {navigateByItemText}=useNavigation()
    const handleListItemClick =(text)=>{
      setSelectedItem(text)
      navigateByItemText(text)
    }
    useEffect(()=>{
      if(isXsOrSmOrMd && expanded){
        setExpanded(false)
      }
    },[isXsOrSmOrMd,expanded,setExpanded])
    useEffect(() => {
      const currentPath = location.pathname;
      const currentItem = drawerItems.find(item => item.path === currentPath);
      if (currentItem) {
        setSelectedItem(currentItem.text);
      } else {
        setSelectedItem('Dashboard'); 
      }
      setExpanded(false);
    }, [location, setSelectedItem, drawerItems, setExpanded]);
  return (
   <>
    <Grid container >
     <Grid item  xs={expanded?4:1.5} sm={expanded?4:1.1} md={expanded?3:0.7} lg={expanded?2:0.45} sx={{position:'relative'}} >
    <Drawer
    sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width:{
             lg:expanded?'16.5%':'3.9%',
             xs:expanded?'33%':'12%',
             md:expanded?'25%':'6%',
             sm:expanded?'33%':'9%'
            },
            boxSizing: 'border-box',
            backgroundColor: darkMode? '#0D253F' : '#f4f6f8',
            color: darkMode?'#fff':'#000',
            overflowX:'hidden',
            position:'fixed',
        },
    }}
    variant="permanent"
    anchor="left"
>
    <List sx={{display:'flex',flexDirection:'column',my:'auto',mx:'auto'}}>
        {drawerItems.map(({text,Icon}, index) => (
            <ListItem key={text} onClick={()=>handleListItemClick(text)}
            sx={{
              my: 0.5,
              bgcolor: selectedItem === text ? darkMode? '#000':'#fff':'inheret', 
              color: selectedItem === text ? darkMode? '#fff':'#000' : 'inherit',
              '&:hover': {
                bgcolor: 'none',
              },
              borderRadius:'20px',
              cursor:'pointer'
            }}
            >
                <ListItemIcon title={text}  sx={{display:'flex',justifyContent:expanded?'start':'start'}}><Icon  sx={{
color: (theme) => 
selectedItem === text
? theme.palette.primary.main 
: darkMode
  ? '#fff' 
  : '#000' 
}} /></ListItemIcon>
                {expanded && <ListItemText primary={text} sx={{display:'flex',justifyContent:'start'}} />} 
            </ListItem>
        ))}
    </List>
    <Box sx={{ display: 'flex', alignItems: 'center',p:1,position:'absolute',right:0,bottom:'10%' }}>
  <IconButton onClick={handleToggleDrawer} sx={{backgroundColor:'primary.main',color:'white',':hover':{backgroundColor:'primary.main'}}} >
    {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  </IconButton>
</Box>
    <Box sx={{
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
padding: '10px',
}}>
<IconButton  sx={{ color: darkMode ? 'grey' : 'primary.main' }}>
<Brightness7Icon />
</IconButton>
<Switch
checked={darkMode}
onChange={toggleDarkMode}
inputProps={{ 'aria-label': 'controlled' }}
/>
<IconButton  sx={{ color: darkMode ? 'primary.main' : 'grey' }}>
<Brightness2Icon />
</IconButton>
</Box>
</Drawer>
</Grid>
<Outlet />
</Grid>
</>  
  )
}
export default SideBarCustomer
