import React, { useState } from 'react'
import GroupIcon from '@mui/icons-material/Group';
import { Badge, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import Owners from './Owners';
import { useNavigation } from '../../../../../../customHook/useNavigation';
import BlockIcon from '@mui/icons-material/Block';

function Users() {
    const [open,setOpen]=useState(false)
    const {clickUsers,clickCustomers,clickSuspended}=useNavigation()
  return (
    <>
      <ListItem button sx={{p:1,mt:2}} onClick={()=>{setOpen(!open)
      clickUsers()
      }}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center'}}><GroupIcon /></ListItemIcon>
        <ListItemText sx={{display:'flex',justifyContent:'start'}}>Users</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
       </ListItem>
       <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{}}>
            <ListItem button  sx={{ pl: 4}} onClick={clickCustomers}>
              <ListItemIcon sx={{display:'flex',justifyContent:'center'}}>
              <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" sx={{display:'flex',justifyContent:'start'}} />
            </ListItem>
            <Owners />
            <ListItem button  sx={{ pl: 4}} onClick={clickSuspended}>
              <ListItemIcon sx={{display:'flex',justifyContent:'center'}}>
    <Badge
      badgeContent={<BlockIcon style={{ fontSize: 20, color: 'red' }} />}
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <PersonIcon style={{ fontSize: 30 }} />
    </Badge>
              </ListItemIcon>
              <ListItemText primary="Suspended" sx={{display:'flex',justifyContent:'start'}} />
            </ListItem>
          </List>
        </Collapse>
    </>
  )
}

export default Users
