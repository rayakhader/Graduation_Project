import React from 'react'
import BusinessIcon from '@mui/icons-material/Business'; 
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigation } from '../../../../../../customHook/useNavigation';

function Owners() {
  const {clickOwners} =useNavigation()
  return (
    <>
     <ListItem button  sx={{ pl: 4 }} onClick={clickOwners}>
              <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
              <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Owners" sx={{display:'flex',justifyContent:'start'}} />
     </ListItem>
    </>
  )
}

export default Owners
