import React, { useState } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {  Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigation } from '../../../../../../customHook/useNavigation';

function Actions() {
    const [open,setOpen]=useState(false)
    const {clickCity,clickUniversity,clickApartmentAdmin}=useNavigation()
  return (
    <>
    <ListItem button sx={{p:1,mt:2}} onClick={()=>setOpen(!open)}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center'}}><FlashOnIcon /></ListItemIcon>
        <ListItemText sx={{display:'flex',justifyContent:'start'}}>Actions</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
       </ListItem>
       <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{}}>
            <ListItem button sx={{ pl: 4}} onClick={clickCity}>
              <ListItemIcon sx={{display:'flex',justifyContent:'center'}}>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText  primary="Cities" sx={{display:'flex',justifyContent:'start'}} />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} onClick={clickUniversity}>
              <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Universities" sx={{display:'flex',justifyContent:'start'}} />
            </ListItem>
            <ListItem button sx={{ pl: 4}} onClick={clickApartmentAdmin} >
              <ListItemIcon sx={{display:'flex',justifyContent:'center'}}>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="Apartments" sx={{display:'flex',justifyContent:'start'}} />
            </ListItem>
          </List>
        </Collapse>
      
    </>
  )
}

export default Actions
